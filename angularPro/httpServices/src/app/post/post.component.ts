import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any;
 
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement){
    let post= {title: input.value}; // them vao xong roi goi service
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
    .subscribe(newPost => { // goi service de tranh thoi gian delay
      post['id'] = newPost.id;
      // this.posts.splice(0, 0, post); 
      // console.log(newPost)
    },
    (err: AppError) => {
      this.posts.splice(0,1); // neu co loi thi them vao xong roi xoa

      if(err instanceof BadInputError){
        // alert("This post has already deleted");
      }else{
        throw err;
      }
    })
  }
  updatePost(post){
    this.service.update(post.id)
      .subscribe(updatedPost => {
        console.log(updatedPost)
      })
  }
  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);


    this.service.delete(post.id)
      .subscribe(null,
      (err: AppError) => {
        this.posts.splice(index, 0, post);

        if(err instanceof NotFoundError){
          alert("This post has already deleted");
        }else{
          throw err;
        }
      })
  }
}
