import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MockApiService } from '../mock-api.service';

@NgModule({
    id: 'movies',
    declarations: [
        MovieListComponent,
        MovieEditorComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: MovieListComponent },
            { path: 'add', component: MovieEditorComponent },
            { path: 'edit/:id', component: MovieEditorComponent }
        ]),
        InMemoryWebApiModule.forRoot(MockApiService),
		FormsModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})

export class MoviesModule { }
