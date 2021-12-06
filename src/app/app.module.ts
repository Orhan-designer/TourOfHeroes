import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroGeneralComponent } from './hero-general/hero-general.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroCreateComponent,
    HeroGeneralComponent,
    HeroEditComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
