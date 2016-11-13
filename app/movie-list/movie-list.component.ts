import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieRepositoryService } from '../repositories/movie-repository.service';

@Component({
	selector: 'movie-list',
	templateUrl: './app/movie-list/movie-list.html',
	styleUrls: ['./app/movie-list/movie-list.css']
})

export class MovieListComponent {
	movies: any[];

	constructor(private route: ActivatedRoute,
		private router: Router,
		private movieRepositoryService: MovieRepositoryService) {
		this.movies = [];

		movieRepositoryService.list().then(x => this.movies = x);
	}

	delete(movie) {
		this.movieRepositoryService.delete(movie);
	
		this.movies = this.movies.filter(function (obj) {
			return obj.id !== movie.id;
		});
	}

}