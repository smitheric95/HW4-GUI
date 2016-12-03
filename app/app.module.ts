import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { MockApiService } from './mock-api.service';
import { DomainModule } from './domain/domain.module';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [
    DomainModule, 
  	BrowserModule,
    HttpModule,
    MoviesModule
  ],
  declarations: [
  	AppComponent
  ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }