import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  emailAddress!: string;
  password!: string;
  responseBody!: any;

  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const data = {
      email: this.emailAddress,
      password: this.password,
    };
    console.log(data);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    this.http
      .post('https://vcip-test-api.onrender.com/users/login', data, {
        headers: headers,
      })
      .subscribe((responseData) => {
        console.log('Response from login api ->', responseData);
        this.responseBody = responseData;
        if (this.responseBody.error) {
          alert(this.responseBody.message);
          return;
        }
        localStorage.setItem('user', JSON.stringify(this.responseBody.data));
        this.sendUser.emit(this.responseBody.data);
        alert(this.responseBody.message);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
        //this.setInitialState();
      });
  }
}
