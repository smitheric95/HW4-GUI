import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {
    createDb() {
        let movies = [
            { id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg' },
		    { id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg' },
		    { id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg' }
        ];

        return {
            movies
        };
    }
}