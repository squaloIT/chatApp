import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  // tslint:disable-next-line:comment-format
  // tslint:disable-next-line:max-line-length
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canLoad: [AuthGuard] },
  // ! JA OVDE UCITAVAM CEO MODEL KOJI SE LAZY LOADUJE A NE SAMO RUTU!
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  providers: [AuthGuard] //
})
export class AppRoutingModel { }
