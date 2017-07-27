import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  message = false;
  messageClass = false;
  blog = {
  	title: String,
  	body: String
  };
  processing = false;
  currentUrl;
  loading = true;


  constructor(
  	private location: Location,
  	private activatedRoute: ActivatedRoute,
  	private blogService: BlogService
  	) { }

  updateBlogSubmit() {

  }

  goBack() {
  	this.location.back();
  }

  ngOnInit() {
  	this.currentUrl = this.activatedRoute.snapshot.params;
  	this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
  		if (!data.success) {

  		} else {
  			this.blog = data.blog;
  		}
  	})
  }

}
