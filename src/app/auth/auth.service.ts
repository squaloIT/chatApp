import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  config = {
    apiKey: 'AIzaSyA13zaD61PzprY8eBInYEeqlLiytslzEyw',
    authDomain: 'chatapp-with-angular.firebaseapp.com',
    // databaseURL: 'https://chatapp-with-angular.firebaseio.com',
    projectId: 'chatapp-with-angular',
    // storageBucket: 'chatapp-with-angular.appspot.com',
    // messagingSenderId: '800741080686'
  };
  private token = null;

  constructor() {
    firebase.initializeApp(this.config);
  }
  async signInUser(email: string, password: string): Promise<string> {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password).catch( (error) => {
      return Promise.reject('The user with specified email and password does not exist!');
    });
    return firebase.auth().currentUser.getIdToken();
  }
  getToken(): string | null {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then( (response) => {
      firebase.auth().currentUser.sendEmailVerification().then( () => {
        firebase.auth().currentUser.getIdToken().then( (token) => {
         this.token = token;
        });
      });
    });
    return this.token;
  }
  isAuthenticated() {
    console.log(this.token);
    return this.token != null; // "asdas"!=null
  }
  logOut(): any {
    firebase.auth().signOut().then( () => {
      this.token = null;
    });
  }
}
