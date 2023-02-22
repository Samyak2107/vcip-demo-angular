import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-permissions-vkyc',
  templateUrl: './grant-permissions-vkyc.component.html',
  styleUrls: ['./grant-permissions-vkyc.component.css'],
})
export class GrantPermissionsVkycComponent implements OnInit {
  mediaPermissionsEnabled!: boolean;
  locationPermissionEnabled!: boolean;

  constructor() {}

  ngOnInit(): void {}

  getDevices() {
    const devices = navigator.mediaDevices.enumerateDevices();
    console.log('Available devices ->', devices);
  }

  callGrantAccess() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 500,
          height: 500,
        },
        audio: true,
      })
      .then((res) => {
        console.log('Stream response ->', res);
        if (res) {
          this.mediaPermissionsEnabled = true;
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            if (position) {
              this.locationPermissionEnabled = true;
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
