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
    isAdding: boolean;
    title: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private movieRepositoryService: MovieRepositoryService) { }

    ngOnInit() {
        this.movie = {};
        this.years = Array(50).fill(0).map((x, i) => (new Date().getFullYear() - i));
        this.isAdding = true;
        this.title = "New Movie";

        this.route.params.forEach(params => {
            if (params['id'] !== undefined) {
                this.movieRepositoryService.get(+params['id']).then((data) => {this.movie = data;});

                this.isAdding = false;
                this.title = this.movie.title;
            }
        });
    }
    /*
        save() {
            if(this.isAdding == true)
                this.movieRepositoryService.add(this.movie);
            else
                this.movieRepositoryService.update(this.movie);
            this.router.navigateByUrl('');
        }
        */
}