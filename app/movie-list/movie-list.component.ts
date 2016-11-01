import { Component } from '@angular/core';
import { MovieRepositoryService } from '../repositories/movie-repository.service';

@Component({
  selector: 'movie-list',
  templateUrl: './app/movie-list/movie-list.html',
  styleUrls: [ './app/movie-list/movie-list.css' ]
})

export class MovieListComponent { 
	movies : any[];

	constructor(private movieRepositoryService : MovieRepositoryService){
		this.movies = this.movieRepositoryService.list();
	}

	delete(movie){
		this.movieRepositoryService.delete(movie);
	}
}