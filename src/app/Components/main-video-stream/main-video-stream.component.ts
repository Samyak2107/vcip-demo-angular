import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-video-stream',
  templateUrl: './main-video-stream.component.html',
  styleUrls: ['./main-video-stream.component.css'],
})
export class MainVideoStreamComponent implements OnInit {
  responseBody!: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
    this.http
      .post('https://rc.jiomeet.jio.com/api/thirdparty/provision/user', data, {
        headers: headers,
      })
      .subscribe((responseData) => {
        console.log('Response from provision user api ->', responseData);
        this.responseBody = responseData;
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
      });
  }
}
