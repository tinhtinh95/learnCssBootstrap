import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  getListCategories() {
    return this.db.list('/categories').snapshotChanges().pipe(
      map(changes =>
        changes.map(el => ({ key: el.payload.key, value: el.payload.val() }))
      )
    );
  }
}
