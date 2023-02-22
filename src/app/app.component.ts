import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-angular-app';
  userDetails!: any;
  agentOnlineStatus!: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    const localItem: any = localStorage.getItem('user');
    this.userDetails = JSON.parse(localItem);
    if (!this.userDetails) {
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/home']);
  }

  makeAgentOnline(event: any) {
    console.log('Parameter received from emmitter =>', event);
    this.agentOnlineStatus = event;
  }
}
