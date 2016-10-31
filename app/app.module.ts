import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { MovieRepositoryService } from './repositories/movie-repository.service';
import { MovieEditorComponent }   from './movie-editor/movie-editor.component';
import { MovieListComponent }   from './movie-list/movie-list.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'add', component: MovieEditorComponent },
      { path: 'edit/:id', component: MovieEditorComponent }
    ])
  ],
  declarations: [
  	AppComponent,
  	MovieListComponent,
    MovieEditorComponent
  ],
  providers: [ MovieRepositoryService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }