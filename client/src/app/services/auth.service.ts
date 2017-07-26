import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080";

  constructor(
  	private http: Http
  	) { }

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


}
