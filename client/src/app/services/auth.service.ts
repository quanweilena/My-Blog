import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  domain = "http://localhost:8080";
  authToken;
  user;
  options;

  constructor(
  	private http: Http
  	) { }

  createAuthenticationHeaders() {
  	this.loadToken();
  	this.options = new RequestOptions({
  		headers: new Headers({
  			'Content-Type': 'application/json',
  			'authorization': this.authToken
  		})
  	})
  }

  loadToken() {
  	this.authToken = localStorage.getItem('token');
  }

  // Function to rigister user accounts
  registerUser(user) {
  	return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  // Function to check if username is available
  checkUsername(username) {
  	return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if email is available
  checkEmail(email) {
  	return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }

  // Function to login user accounts
  loginUser(user) {
  	return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  logoutUser() {
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

// Function to store user's data in client local storage
  storeUserData(token, user) {
  	localStorage.setItem('token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
  	this.user = user; 
  }

// Function to get user's profile data
  getProfile() {
  	this.createAuthenticationHeaders();
  	return this.http.get(this.domain + '/authentication/profile', this.options).map(res => res.json());
  }

// Function to check if user is logged in 
loggedIn() {
  return tokenNotExpired();
}


}
