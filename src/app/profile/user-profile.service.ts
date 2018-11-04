import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from '../auth/auth.service';
import { User } from '../profile/user.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserProfile {
  private friends: User[];
  onFriendsChanged: Subject<User[]> = new Subject<User[]>();

  constructor(private authService: AuthService) {
    this.authService.onAuth.subscribe((userID) => {
      this.initFriends(userID);
    });
  }

  initFriends(userID: string) {
    firebase.database().ref('/users/' + userID).on('value', (snapshot) => { // ! MENJA SE SAMO JEDNOm
      const user = snapshot.val();
      this.friends = user.friends;
      this.onFriendsChanged.next(this.friends);
    }, (_error) => {
      console.error(_error);
    });
  }
}
