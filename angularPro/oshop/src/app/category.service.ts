import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  getListCategories() {
    return this.db.list('/categories',ref=>ref.orderByChild('name')).snapshotChanges().pipe(
      map(changes =>
        changes.map(el => ({ key: el.payload.key, value: el.payload.val() }))
      )
    );
  }
}
