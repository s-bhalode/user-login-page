import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  userEmail: any;
  userPassword : any; 

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  checked = false;

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
  getPasswordErrorMessage(){
    if(this.password.hasError('required')){
      return 'Please enter password';
    }

    return this.password.hasError('password') ? 'Please enter atleast 8 characters' : '';
  }

  getUserLoginDetails(){
    
  }

}
