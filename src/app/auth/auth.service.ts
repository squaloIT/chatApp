import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  config = {
    apiKey: 'AIzaSyA13zaD61PzprY8eBInYEeqlLiytslzEyw',
    authDomain: 'chatapp-with-angular.firebaseapp.com',
    databaseURL: 'https://chatapp-with-angular.firebaseio.com',
    projectId: 'chatapp-with-angular',
    // storageBucket: 'chatapp-with-angular.appspot.com',
    // messagingSenderId: '800741080686'
  };

  onAuth: Subject<string> = new Subject<string>();
  private token = null;

  constructor(private httpClient: HttpClient) {
    this.initializeApp();
  }
  initializeApp(): void {
    firebase.initializeApp(this.config);
  }
  getDatabase() {
    return firebase.database();
  }
  getUserID(): string {
    return firebase.auth().currentUser.uid;
  }
  async signInUser(email: string, password: string): Promise<string> {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password).catch((_error) => {
      return Promise.reject('The user with specified email and password does not exist!');
    });
    return firebase.auth().currentUser.getIdToken();
  }
  async registerUser(email: string, password: string, username: string) {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // firebase.auth().currentUser.sendEmailVerification().then(async () => {
    const token = await firebase.auth().currentUser.getIdToken();
    this.setToken(token);
    this.httpClient.put(`https://chatapp-with-angular.firebaseio.com/users/${firebase.auth().currentUser.uid}.json`, {
      'email': email,
      'username': username,
      'registeredAt': moment().valueOf(),
      'friends': [
        {
          'uid': 'Qw8COKKTqJWb9gJi12qDVDxAe0u2',
          'email': 'ajqla94@gmail.com'
        },
        {
          'uid': 'ZkSNlydq29hrF6aJFhiwXJi4z8n1',
          'email': 'nikola.mihajlovic@ict.edu.rs'
        }]
    }, {
        params: new HttpParams().set('auth', this.token)
      })
      .subscribe(async (data) => {
        console.log(data);
        alert('Succesfully registeredd');
      }, (err) => {
        console.log(err);
      });
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  getToken(): string | null {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
    const userID = firebase.auth().currentUser.uid;
    this.onAuth.next(userID);
  }
  logOut(): any {
    firebase.auth().signOut().then(() => {
      this.token = null;
    });
  }
}
