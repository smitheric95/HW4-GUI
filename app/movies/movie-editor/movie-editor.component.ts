import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieRepositoryService } from '../../domain/movies/movie-repository.service';
import { Movie } from '../../domain/movies/movie';

@Component({
    selector: 'movie-editor',
    templateUrl: './app/movies/movie-editor/movie-editor.html',
    styleUrls: ['./app/movies/movie-editor/movie-editor.css']
})
export class MovieEditorComponent {
    @Input() movie: Movie;
    years: number[];
    isAdding: boolean;
    title: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private movieRepositoryService: MovieRepositoryService) { }

    ngOnInit() {
        this.movie = new Movie();
        this.years = Array(50).fill(0).map((x, i) => (new Date().getFullYear() - i));
        this.isAdding = true;

        this.route.params.forEach(x => this.load(+x['id']));

    }

    save() {
        if (this.isAdding == true) {
            if (this.movie.imagePath == null)
                this.movie.imagePath = "images/blank.jpg"
            this.movieRepositoryService.add(this.movie)
                .then(() => this.returnToList(`${this.movie.title} has been added!`));
        }
        else{
            this.movieRepositoryService.update(this.movie)
                .then(() => this.returnToList(`${this.movie.title} has been updated!`));
        }
    }

    private load(id) {
        if (!id) {
            this.title = "New Movie";
            return;
        }

        var onload = (data) => {
            if (data) {
                this.movie = data;
                this.isAdding = false;
                this.title = this.movie.title;
            } else {
                this.returnToList('Movie not found.');
            }
        }

        this.movieRepositoryService.get(id).then(onload);
    }

    private returnToList(message) {
        this.router.navigateByUrl('/')
            .then(() => alert(message));
    }

}