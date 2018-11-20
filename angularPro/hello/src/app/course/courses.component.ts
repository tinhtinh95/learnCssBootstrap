import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
   <h2> {{ getTitle() }}</h2>
   <h2 [textContent]="title"></h2>
   <ul>
      <li *ngFor='let course of courses'>
        {{course}}
      </li>
   </ul>
   <img src="{{imageUrl}}" />
   <img [src]="imageUrl" />

   <table>
      <tr>
        <td [attr.colspan]= "colSpan"></td>
      </tr>
   </table>
   <button class="btn btn-primary" [class.active]="isActive">Save</button>
   <button [style.backgroundColor]="isActive ? 'blue': 'white'">Style Binding</button>
   <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Event Binding</button>
   </div>
   <input (keyup)="onKeyUp($event)" />
   <hr>
   <input (keyup.enter)="onKeyUpEnter()" />
   <hr>
   <input (keyup.enter)="onKeyUpEnter1($event)" />
   <hr>
   <input #email (keyup.enter)="onKeyUpEnter2(email.value)" />
   <hr>
   <label>Two way binding </label>
   <input [value]="emailName" (keyup.enter)="emailName = $event.target.value; onKeyUpEnter3()" />
   <input [(ngModel)]="emailName" (keyup.enter)="onKeyUpEnter3()" />
   `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  colSpan = 2;
  isActive = false;
  emailName = 'tina@enclave.vn';

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log('Div click');
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
    }
  }

  onKeyUpEnter() {
    console.log('Enter was pressed');
  }

  onKeyUpEnter1($event) {
    console.log('Enter was pressed: ', $event.target.value);
  }

  onKeyUpEnter2(email) {
    console.log('Enter was pressed with email ', email);
  }

  onKeyUpEnter3() {
    console.log('Enter was pressed with email ', this.emailName);
  }

  getTitle() {
    return this.title;
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
