import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { MainVideoStreamComponent } from './Components/main-video-stream/main-video-stream.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'video-call',
    component: MainVideoStreamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
