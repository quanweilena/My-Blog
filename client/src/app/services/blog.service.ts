import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService {

  options;
  domain = this.authservice.domain;

  constructor(
  	private authservice: AuthService,
  	private http: Http
  	) { }

  createAuthenticationHeaders() {
  	this.authservice.loadToken();
  	this.options = new RequestOptions({
  		headers: new Headers({
  			'Content-Type': 'application/json',
  			'authorization': this.authservice.authToken
  		})
  	})
  }

  newBlog(blog) {
  	this.createAuthenticationHeaders();
  	return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(res => res.json());
  }

}
