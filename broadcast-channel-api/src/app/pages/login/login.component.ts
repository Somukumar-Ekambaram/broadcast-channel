import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  onSubmit(form: NgForm) {
    localStorage.removeItem('token');
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['dashboard']);
  }

}
