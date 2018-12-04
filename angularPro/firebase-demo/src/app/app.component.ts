import { Component } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  coursesTmp: AngularFireList<any>;
  course$;
  author$;
  itemsRef;
  title = 'firebase-demo';

  constructor(private db: AngularFireDatabase) {
    this.coursesTmp = db.list('/courses');
//     this.coursesTmp.snapshotChanges()
//     .subscribe(actions => {
//       actions.forEach(action => {
//       console.log('type', action.type);
//       console.log('key' , action.key);
//       console.log('name', action.payload.val());
//   });
//   this.courses$ = actions;

// });

    this.courses$ = this.coursesTmp.snapshotChanges().pipe(
      map(changes =>
        changes.map(el => ({ key: el.payload.key, value: el.payload.val() }))
      )
    );
    console.log(this.courses$);
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {
    this.coursesTmp.push({
      name: course.value,
      price: 4,
      isLive: true,
      sections: [
        { title: 'Components'},
        { title: 'Templates'},
      ]
    });
    course.value = '';
  }
  update(course) {
    console.log(course, course.value);
    this.db.object('/courses/' + course.key)
      .set({
        name: course.value + ' UPDATED'
      });
  }
  delete(course) {
    this.db.object('/courses/' + course.key)
      .remove();
  }
}
