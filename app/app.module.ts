import { NgModule }      from '@angular/core';
import { AppComponent }   from './app.component';
import { DomainModule } from './domain/domain.module';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [
    DomainModule, 
    MoviesModule,
    SharedModule
  ],
  declarations: [
  	AppComponent
  ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }