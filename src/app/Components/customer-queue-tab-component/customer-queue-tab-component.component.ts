import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-queue-tab-component',
  templateUrl: './customer-queue-tab-component.component.html',
  styleUrls: ['./customer-queue-tab-component.component.css'],
})
export class CustomerQueueTabComponentComponent implements OnInit {
  activateLiveTab!: boolean;
  activateScheduledTab!: boolean;
  activateAssignedTab!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.activateLiveTab = true;
  }

  onLiveTabActive() {
    this.activateLiveTab = true;
    this.activateScheduledTab = false;
    this.activateAssignedTab = false;
  }

  onScheduledTabActive() {
    this.activateScheduledTab = true;
    this.activateLiveTab = false;
    this.activateAssignedTab = false;
  }

  onAssignedTabActive() {
    this.activateAssignedTab = true;
    this.activateLiveTab = false;
    this.activateScheduledTab = false;
  }
}
