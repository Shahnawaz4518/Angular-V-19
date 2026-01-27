import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  

  userName$: any;

  constructor(private userService: User) {
    this.userName$ = this.userService.userName$;
  }

}
