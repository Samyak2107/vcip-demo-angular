import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-queue-live-component',
  templateUrl: './customer-queue-live-component.component.html',
  styleUrls: ['./customer-queue-live-component.component.css'],
})
export class CustomerQueueLiveComponentComponent implements OnInit {
  agentOnlineStatus$!: Observable<any>;
  constructor(private store: Store<{ agentOnline: any }>) {}

  ngOnInit(): void {
    this.agentOnlineStatus$ = this.store.select('agentOnline');
    console.log('Agent Online Status', this.agentOnlineStatus$);
  }

  ngOnChanges(): void {
    this.agentOnlineStatus$ = this.store.select('agentOnline');
    console.log('Agent Online Status', this.agentOnlineStatus$);
  }
}
