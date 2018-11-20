import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  // constructor() {}

  ngOnInit() {
  }

}
