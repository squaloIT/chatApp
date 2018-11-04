import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../profile/user-profile.service';
import { User } from '../profile/user.model';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  friends: User[];
  constructor(private userProf: UserProfile) {
    this.userProf.onFriendsChanged.subscribe( (friends) => {
      this.friends = friends;
    });
  }

  ngOnInit() { }

}
