import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	message;
    messageClass;
    processing = false;

  constructor(
  	private formBuilder: FormBuilder, 
    private authservice: AuthService,
    private router: Router
    ) {
    this.createForm();  // Create Angular 2 Form when component loads
     };

  createForm() {
  	this.form = this.formBuilder.group({
  		username: ['', Validators.required],     
  		password: ['', Validators.required]
  	})
  };

  disableForm(){
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    // this.authservice.loginUser(user).subscribe(data => {
    //   // Response from regestration attempt
    //   if (!data.success){
    //     this.messageClass = 'alert alert-danger';
    //     this.message = data.message;
    //     this.processing = false;
    //     this.enableForm();
    //   } else{
    //     this.messageClass = 'alert alert-success';
    //     this.message = data.message;
    //     setTimeout(() => {
    //       this.router.navigate(['/login']);
    //     }, 2000)   // After register, redirect to login page in 2s
    //   }
    // });
  }

  ngOnInit() {
  }

}
