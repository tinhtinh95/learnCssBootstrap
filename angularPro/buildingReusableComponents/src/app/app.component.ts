import { Component } from '@angular/core';
import { FavouriteChnagedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'buildingReusableComponents';
  post = {
    title: 'Title',
    isFavourite: true,
  };

  onFavouriteChanged(eventArgs: FavouriteChnagedEventArgs) {
    console.log('Favourite changed', eventArgs);
  }
}
