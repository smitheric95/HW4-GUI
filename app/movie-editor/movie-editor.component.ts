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
    
    constructor(private route: ActivatedRoute,
        private router: Router,
        private movieRepositoryService: MovieRepositoryService) { }

    ngOnInit() {
        this.movie = {};
        this.years = Array(50).fill(0).map((x,i)=>(new Date().getFullYear()-i));
        this.isAdding = true;

        this.route.params.forEach((params: Params) => {
            if(params['id'] !== undefined){
                this.movie = this.movieRepositoryService.get(+params['id']);
                this.isAdding = false;
            }
        });
    }

    save() {
        if(this.isAdding == true)
            this.movieRepositoryService.add(this.movie);
        else
            this.movieRepositoryService.update(this.movie);
        this.router.navigateByUrl('');
    }
}