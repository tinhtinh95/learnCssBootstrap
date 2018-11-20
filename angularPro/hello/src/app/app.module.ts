import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    // CoursesComponent,
    PipeExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
