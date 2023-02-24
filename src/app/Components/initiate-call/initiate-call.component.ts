import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { saveProvisionId } from 'src/app/state/provision-user/provision-user.actions';

@Component({
  selector: 'app-initiate-call',
  templateUrl: './initiate-call.component.html',
  styleUrls: ['./initiate-call.component.css'],
})
export class InitiateCallComponent implements OnInit {
  responseBody!: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store
  ) {}

  ngOnInit(): void {}

  onInitiateCall() {
    const data = {
      emailId: 'samyakmp111@gmail.com',
      mobileNo: '7208528570',
      name: 'Samyak',
      lname: 'Panchbhai',
    };
    console.log(data);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('app', 'jiovcip')
      .set(
        'authToken',
        'fx8fTKDgh5JB44pHjYzseR5zZTy5ZXTX90bk9hdDjN4zBX4evg4b1xskmcJwwEHM'
      )
      .set('Accept', 'application/json');
    // this.http
    //   .post('https://rc.jiomeet.jio.com/api/thirdparty/provision/user', data, {
    //     headers: headers,
    //   })
    //   .subscribe((responseData) => {
    //     console.log('Response from provision user api ->', responseData);
    //     this.responseBody = responseData;
    //     this.store.dispatch(saveProvisionId({ content: this.responseBody }));
    // if (this.responseBody.error) {
    //   alert(this.responseBody.message);
    //   return;
    // }
    // localStorage.setItem('user', JSON.stringify(this.responseBody.data));
    // this.sendUser.emit(this.responseBody.data);
    // alert(this.responseBody.message);
    // this.router.navigate(['/home']);
    // window.location.reload();
    //this.setInitialState();
    // this.router.navigate(['/video-call']);
    // });
    this.router.navigate(['/video-call']);
  }
}
