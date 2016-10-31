import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MovieRepositoryService } from './repositories/movie-repository.service';
import { MovieListComponent }   from './movie-list/movie-list.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  ],
  declarations: [
  	AppComponent,
  	MovieListComponent
  ],
  providers: [ MovieRepositoryService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }