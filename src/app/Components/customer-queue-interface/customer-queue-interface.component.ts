import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-queue-interface',
  templateUrl: './customer-queue-interface.component.html',
  styleUrls: ['./customer-queue-interface.component.css'],
})
export class CustomerQueueInterfaceComponent implements OnInit {
  activateCustomerQueue!: boolean;
  activateCallHistory!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.activateCustomerQueue = true;
  }
  onTabCustomerQueue() {
    this.activateCustomerQueue = true;
    this.activateCallHistory = false;
  }

  onTabCallHistory() {
    this.activateCallHistory = true;
    this.activateCustomerQueue = false;
  }
}
