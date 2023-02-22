import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userDetails!: any;
  userLoggedIn!: boolean;
  isChecked!: true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localItem: any = localStorage.getItem('user');
    this.userDetails = JSON.parse(localItem);
    if (!this.userDetails) {
      this.userLoggedIn = false;
    } else {
      this.userLoggedIn = true;
    }
  }

  onLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
