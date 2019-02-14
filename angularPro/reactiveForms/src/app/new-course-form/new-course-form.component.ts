import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    (this.topics as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics');
  }
}
