import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { FriendsPage } from '../friends/friends';
import { PhotosPage } from '../photos/photos';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  profilePage = ProfilePage;
  friendsPage = FriendsPage;
  photosPage = PhotosPage;
}
