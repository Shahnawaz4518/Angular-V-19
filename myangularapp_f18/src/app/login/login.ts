import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private userService: User) {}

  login() {
    this.userService.setUserName('Shahnawaz');
  }
}
