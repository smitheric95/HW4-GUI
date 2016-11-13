import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from './app.component';
import { MovieRepositoryService } from './repositories/movie-repository.service';
import { MovieEditorComponent }   from './movie-editor/movie-editor.component';
import { MovieListComponent }   from './movie-list/movie-list.component';
import { RatingComponent }   from './rating/rating.component';
import { MockApiService } from './mock-api.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'add', component: MovieEditorComponent },
      { path: 'edit/:id', component: MovieEditorComponent }
    ]),
    InMemoryWebApiModule.forRoot(MockApiService)
  ],
  declarations: [
  	AppComponent,
  	MovieListComponent,
    MovieEditorComponent,
    RatingComponent
  ],
  providers: [ MovieRepositoryService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }