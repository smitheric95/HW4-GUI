import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieRepositoryService } from '../../domain/movies/movie-repository.service';

@Component({
	selector: 'movie-list',
	templateUrl: './app/movies/movie-list/movie-list.html',
	styleUrls: ['./app/movies/movie-list/movie-list.css']
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
		this.movieRepositoryService.delete(movie)
			.then(() => {
				alert(`${movie.title} has been deleted`);
			});
	
		this.movies = this.movies.filter(function (obj) {
			return obj.id !== movie.id;
		});
	}

}