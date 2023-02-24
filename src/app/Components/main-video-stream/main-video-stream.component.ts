import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showProvisionId } from 'src/app/state/provision-user/provision-user.selectors';

@Component({
  selector: 'app-main-video-stream',
  templateUrl: './main-video-stream.component.html',
  styleUrls: ['./main-video-stream.component.css'],
})
export class MainVideoStreamComponent implements OnInit {
  provisionId$!: Observable<any>;
  responseBody!: any;
  userDetails!: any;
  constructor(
    private http: HttpClient,
    private store: Store<{ provisionId: any }>
  ) {}

  ngOnInit(): void {
    const localItem: any = localStorage.getItem('user');
    this.userDetails = JSON.parse(localItem);
    console.log('Name of user for Jio meet ->', this.userDetails.name);
    this.provisionId$ = this.store.select('provisionId');
    console.log(
      'Provision id received in streaming component',
      this.provisionId$
    );
  }
}
