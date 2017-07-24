import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
  	private formBuilder: FormBuilder
  	){ 
  		this.createForm()
  }

  createForm() {
  	this.form = this.formBuilder.group({
  		username: ['', Validators.compose([
  			Validators.required,
  			Validators.minLength(3),
  			Validators.maxLength(15),
  			this.validateUsername
  			])],     // Set default value
  		email: ['', Validators.compose([
  			Validators.required,
  			Validators.minLength(5),
  			Validators.maxLength(30),
  			this.validateEmail
  			])],
  		password: ['', Validators.compose([
  			Validators.required,
  			Validators.minLength(8),
  			Validators.maxLength(35),
  			this.validatePassword
  			])],
  		confirm: ['', Validators.required]
  	}, { validator: this.matchingPasswords('password', 'confirm')
  	})
  };

  validateUsername(controls) {
  	const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
    	return null;
    } else {
    	return { 'validateUsername': true }
    }
  };

  validateEmail(controls) {
  	const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
    	return null;
    } else {
    	return { 'validateEmail': true }
    }
  };

  validatePassword(controls) {
  	const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,35}/);
    if (regExp.test(controls.value)) {
    	return null;
    } else {
    	return { 'validatePassword': true }
    }
  };

  matchingPasswords(password, confirm) {
  	return (group: FormGroup) => {
  		if (group.controls[password].value === group.controls[confirm].value) {
  			return null;
  		} else {
  			return {'matchingPasswords': true } 
  		}
  	}
  }

  onRegisterSubmit() {
  	console.log('form submitted');
  }

  ngOnInit() {
  }

}
