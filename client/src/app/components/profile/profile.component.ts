import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	username;
	email;

  constructor(
  	private authservice: AuthService
  	) { }

  ngOnInit() {
  	this.authservice.getProfile().subscribe(profile => {
  		this.username = profile.user.username;
  		this.email = profile.user.email;
  	})
  }

}
