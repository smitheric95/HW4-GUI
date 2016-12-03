"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movie_repository_service_1 = require('../../domain/movies/movie-repository.service');
var movie_1 = require('../../domain/movies/movie');
var MovieEditorComponent = (function () {
    function MovieEditorComponent(route, router, movieRepositoryService) {
        this.route = route;
        this.router = router;
        this.movieRepositoryService = movieRepositoryService;
    }
    MovieEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movie = new movie_1.Movie();
        this.years = Array(50).fill(0).map(function (x, i) { return (new Date().getFullYear() - i); });
        this.isAdding = true;
        this.route.params.forEach(function (x) { return _this.load(+x['id']); });
    };
    MovieEditorComponent.prototype.save = function () {
        var _this = this;
        if (this.isAdding == true) {
            if (this.movie.imagePath == null)
                this.movie.imagePath = "images/blank.jpg";
            this.movieRepositoryService.add(this.movie)
                .then(function () { return _this.returnToList(_this.movie.title + " has been added!"); });
        }
        else {
            this.movieRepositoryService.update(this.movie)
                .then(function () { return _this.returnToList(_this.movie.title + " has been updated!"); });
        }
    };
    MovieEditorComponent.prototype.load = function (id) {
        var _this = this;
        if (!id) {
            this.title = "New Movie";
            return;
        }
        var onload = function (data) {
            if (data) {
                _this.movie = data;
                _this.isAdding = false;
                _this.title = _this.movie.title;
            }
            else {
                _this.returnToList('Movie not found.');
            }
        };
        this.movieRepositoryService.get(id).then(onload);
    };
    MovieEditorComponent.prototype.returnToList = function (message) {
        this.router.navigateByUrl('/')
            .then(function () { return alert(message); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', movie_1.Movie)
    ], MovieEditorComponent.prototype, "movie", void 0);
    MovieEditorComponent = __decorate([
        core_1.Component({
            selector: 'movie-editor',
            templateUrl: './app/movies/movie-editor/movie-editor.html',
            styleUrls: ['./app/movies/movie-editor/movie-editor.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, movie_repository_service_1.MovieRepositoryService])
    ], MovieEditorComponent);
    return MovieEditorComponent;
}());
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.component.js.map