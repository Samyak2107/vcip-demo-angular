import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  name!: string;
  emailAddress!: string;
  password!: string;
  cpassword!: string;
  responseBody!: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.password !== this.cpassword) {
      alert('Password and confirm password do not match!');
      return;
    }
    const data = {
      name: this.name,
      email: this.emailAddress,
      password: this.password,
    };
    console.log(data);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    this.http
      .post('http://localhost:5000/users/sign-up', data, {
        headers: headers,
      })
      .subscribe((responseData) => {
        console.log('Response from registration api ->', responseData);
        this.responseBody = responseData;
        if (this.responseBody.error) {
          alert(this.responseBody.message);
          return;
        }
        alert(this.responseBody.message);
        this.router.navigate(['/login']);
        //this.setInitialState();
      });
  }
}
