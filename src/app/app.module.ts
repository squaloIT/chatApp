import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModel } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { MainComponent } from './profile/main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RightColumnComponent } from './profile/main/right-column/right-column.component';
import { LeftColumnComponent } from './profile/main/left-column/left-column.component';
import { FooterComponent } from './profile/main/footer/footer.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SidenavListItemComponent } from './sidenav-list/sidenav-list-item/sidenav-list-item.component';
import { UserProfile } from './profile/user-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ChatWindowComponent,
    MainComponent,
    ProfileComponent,
    RightColumnComponent,
    LeftColumnComponent,
    FooterComponent,
    SidenavListComponent,
    SidenavListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModel,
    HttpClientModule
  ],
  providers: [AuthService, UserProfile],
  bootstrap: [AppComponent]
})
export class AppModule { }
