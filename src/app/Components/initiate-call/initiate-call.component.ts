import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiate-call',
  templateUrl: './initiate-call.component.html',
  styleUrls: ['./initiate-call.component.css'],
})
export class InitiateCallComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onInitiateCall() {
    this.router.navigate(['/video-call']);
  }
}
