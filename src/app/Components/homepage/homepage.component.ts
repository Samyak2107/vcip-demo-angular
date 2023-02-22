import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userDetails!: any;
  userName!: string;
  userEmail!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const localItem: any = localStorage.getItem('user');
    this.userDetails = JSON.parse(localItem);
    console.log('Userdetails from localstorage', this.userDetails);
    if (!this.userDetails) {
      this.router.navigate(['/login']);
      return;
    }
    this.userName = this.userDetails.name;
    this.userEmail = this.userDetails.email;
    console.log(this.userName, this.userEmail);
  }
}
