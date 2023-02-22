import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AgentDailyActivityComponent } from './Components/agent-daily-activity/agent-daily-activity.component';
import { CustomerQueueInterfaceComponent } from './Components/customer-queue-interface/customer-queue-interface.component';
import { CustomerQueueTabComponentComponent } from './Components/customer-queue-tab-component/customer-queue-tab-component.component';
import { CurrentlyOfflineComponent } from './Components/currently-offline/currently-offline.component';
import { InitiateCallComponent } from './Components/initiate-call/initiate-call.component';
import { CustomerQueueLiveComponentComponent } from './Components/customer-queue-live-component/customer-queue-live-component.component';
import { GrantPermissionsVkycComponent } from './Components/grant-permissions-vkyc/grant-permissions-vkyc.component';
import { MainVideoStreamComponent } from './Components/main-video-stream/main-video-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomepageComponent,
    AgentDailyActivityComponent,
    CustomerQueueInterfaceComponent,
    CustomerQueueTabComponentComponent,
    CurrentlyOfflineComponent,
    InitiateCallComponent,
    CustomerQueueLiveComponentComponent,
    GrantPermissionsVkycComponent,
    MainVideoStreamComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
