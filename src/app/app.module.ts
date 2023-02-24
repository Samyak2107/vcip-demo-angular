import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AgentDailyActivityComponent } from './Components/agent-daily-activity/agent-daily-activity.component';
import { CustomerQueueInterfaceComponent } from './Components/customer-queue-interface/customer-queue-interface.component';
import { CustomerQueueTabComponentComponent } from './Components/customer-queue-tab-component/customer-queue-tab-component.component';
import { CurrentlyOfflineComponent } from './Components/currently-offline/currently-offline.component';
import { InitiateCallComponent } from './Components/initiate-call/initiate-call.component';
import { CustomerQueueLiveComponentComponent } from './Components/customer-queue-live-component/customer-queue-live-component.component';
import { GrantPermissionsVkycComponent } from './Components/grant-permissions-vkyc/grant-permissions-vkyc.component';
import { MainVideoStreamComponent } from './Components/main-video-stream/main-video-stream.component';
import { StoreModule } from '@ngrx/store';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { provisionReducer } from './state/provision-user/provision-user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    StoreModule.forRoot({ provision: provisionReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
