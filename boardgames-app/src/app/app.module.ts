import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LinksModule } from './links/links.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GameModule,
    CoreModule,
    MatToolbarModule,
    MatCardModule,
    LinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
