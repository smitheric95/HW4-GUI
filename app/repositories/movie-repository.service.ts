import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieRepositoryService {
	private _apiUrl  = 'app/movies';

	constructor(private http: Http){}

	list() : Promise<any[]> {
		return this.http.get(this._apiUrl)
		.toPromise()
		.then(x => x.json().data as any[]);
	}

/*
	get(id : number) : Promise<any> {
		var pluck = x => (x && x.length) ? x[0] : undefined;
		return this.http
			.get(`${this._apiUrl}/?id=${id}`)
			.toPromise()
			.then(x => pluck(x.json().data))
			.catch(x => alert(x.json().error));
	}

//		if(movie.imagePath == null)
//			movie.imagePath = "images/blank.jpg"
	add(movie) : Promise<any> {
		return this.http
			.post(this._apiUrl, movie)
			.toPromise()
			.then(() => movie)
			.catch(x => alert(x.json().error));
	}


	update(movie) : Promise<any> {
		return this.http
			.put(`${this._apiUrl}/${movie.id}`, movie)
			.toPromise()
			.then(() => movie)
			.catch(x => alert(x.json().error));
	}
*/

	delete(movie) : Promise<void> {
		return this.http
			.delete(`${this._apiUrl}/${movie.id}`, movie)
			.toPromise()
			.catch(x => alert(x.json().error));
	}
	
}
