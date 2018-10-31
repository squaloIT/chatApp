import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  loggedIn;
  constructor( private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  onLogout() {
    this.authService.logOut();
    this.loggedIn = false;
    this.router.navigate(['./../auth/login']);
  }
}
