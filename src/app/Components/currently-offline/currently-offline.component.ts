import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-currently-offline',
  templateUrl: './currently-offline.component.html',
  styleUrls: ['./currently-offline.component.css'],
})
export class CurrentlyOfflineComponent implements OnInit {
  agentIsOnline!: boolean;

  @Output() setAgentOnline: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onGoOnline() {
    this.agentIsOnline = true;
    this.setAgentOnline.emit(this.agentIsOnline);
    console.log('Event emmitted');
  }
}
