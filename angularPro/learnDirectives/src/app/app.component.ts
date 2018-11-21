import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnDirectives';
  viewMode = 'map';
  courses;

  loadCourses(){
    this.courses=[
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }
  onAdd(){
    const len = this.courses.length+1;
    this.courses.push({id: len, name: 'course'+len})
  }
  onRemove(course){
    const index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  trackCourses(index,course){
    return course ? course.id: undefined;
  }
}
