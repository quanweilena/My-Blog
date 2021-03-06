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

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
  	this.authservice.loadToken();   // Get token so it can be attached to headers
    // Headers configuration options
  	this.options = new RequestOptions({
  		headers: new Headers({
  			'Content-Type': 'application/json',   // Format set to json
  			'authorization': this.authservice.authToken    // Attach token
  		})
  	})
  }

  // Function to create a new blog post
  newBlog(blog) {
  	this.createAuthenticationHeaders();  // Create headers
  	return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(res => res.json());
  }

  getAllBlogs() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(res => res.json());
  }

  getSingleBlog(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(res => res.json());
  }

  editBlog(blog) {
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + 'blogs/updateBlog/', blog, this.options).map(res => res.json());
  }

  deleteBlog(id) {
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(res => res.json());
  }

  likeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options).map(res => res.json());
  }

  dislikeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options).map(res => res.json());
  }

  postComment(id, comment) {
    this.createAuthenticationHeaders();
    const blogData = {
      id: id,
      comment: comment
    }
    return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(res => res.json());
  }

  deleteComment(id, index) {
    this.createAuthenticationHeaders();
    const blogData = {
      id: id,
      index: index
    }
    return this.http.put(this.domain + 'blogs/deleteComment/', blogData, this.options).map(res => res.json());
  }

}
