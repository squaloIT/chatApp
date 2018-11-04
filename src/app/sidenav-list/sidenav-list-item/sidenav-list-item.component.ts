import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/profile/user.model';

@Component({
  selector: 'app-sidenav-list-item',
  templateUrl: './sidenav-list-item.component.html',
  styleUrls: ['./sidenav-list-item.component.css']
})
export class SidenavListItemComponent implements OnInit {
  @Input() friend: User;
  constructor() { }

  ngOnInit() {
  }

}
