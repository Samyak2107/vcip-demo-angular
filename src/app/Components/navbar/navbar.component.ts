import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleOnlineStatus } from 'src/app/state/provision-user/provision-user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userDetails!: any;
  userLoggedIn!: boolean;
  isChecked!: true;
  agentStatus: boolean = false;

  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {}

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
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }

  handleAgentStatus() {
    this.agentStatus = !this.agentStatus;
    console.log(this.agentStatus);
    this.store.dispatch(toggleOnlineStatus({ content: this.agentStatus }));
  }
}
