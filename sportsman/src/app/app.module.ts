import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateplayerComponent } from './component/CreatePlayerComponent/createplayer.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlayerlistComponent } from './component/playerlist/playerlist.component';
import { PlayerdetailsComponent } from './component/playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './component/updateplayer/updateplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateplayerComponent,
    PlayerlistComponent,
    PlayerdetailsComponent,
    UpdateplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
