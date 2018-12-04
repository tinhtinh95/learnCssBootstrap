import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LikeComponent';
  tweet = {
    isLiked: false,
    likesCount: 0,
  };
}
