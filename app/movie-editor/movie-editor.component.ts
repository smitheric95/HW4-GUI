import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieRepositoryService } from '../repositories/movie-repository.service';

@Component({
    selector: 'movie-editor',
    templateUrl: './app/movie-editor/movie-editor.html',
    styleUrls: ['./app/movie-editor/movie-editor.css']
})
export class MovieEditorComponent {
    movie: any;
    years: number[];

    constructor(private route: ActivatedRoute,
        private router: Router,
        private movieRepositoryService: MovieRepositoryService) { }

    ngOnInit() {
        this.movie = {}
        this.years = Array.from(new Array(117), (x,i) => i+1900);
        this.years.reverse();
    }

    save() {
        this.movieRepositoryService.add(this.movie);
        this.router.navigateByUrl('');
    }
}