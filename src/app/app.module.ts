import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModel } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModel
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
