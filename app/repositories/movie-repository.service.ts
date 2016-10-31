import { Injectable } from '@angular/core';

@Injectable()
export class MovieRepositoryService {

	private _movies: any[];

	private getIndex(id : number){
		for (var i = this._movies.length; i--;) {
			var movie = this._movies[i];
			if(movie.id == id) return i;
		}
		return -1;
	}

	constructor(){
		this._movies = [];
		this._movies.push({ id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg' });
		this._movies.push({ id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg' });
		this._movies.push({ id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg' });
	}

	public list() : any[] {
		return this._movies;
	}

	public get(id : number) : any {
		var index = this.getIndex(id);
		return this._movies[index];
	}

	public add(movie) {
		movie.id = this._movies.length + 1;
		this._movies.push(movie);
	}

	public update(movie) {
		var index = this.getIndex(movie.id);
		this._movies[index] = movie;
	}

	public delete(id : number) {
		var index = this.getIndex(id);
		this._movies.splice(index, 1);
	}
}
