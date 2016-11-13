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
var movie_repository_service_1 = require('../repositories/movie-repository.service');
var MovieListComponent = (function () {
    function MovieListComponent(route, router, movieRepositoryService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.movieRepositoryService = movieRepositoryService;
        this.movies = [];
        movieRepositoryService.list().then(function (x) { return _this.movies = x; });
    }
    MovieListComponent.prototype.delete = function (movie) {
        var _this = this;
        this.movieRepositoryService.delete(movie)
            .then(function () { return _this.returnToList(movie.title + " has been deleted!"); });
    };
    MovieListComponent.prototype.returnToList = function (message) {
        this.router.navigateByUrl('')
            .then(function () { return alert(message); });
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'movie-list',
            templateUrl: './app/movie-list/movie-list.html',
            styleUrls: ['./app/movie-list/movie-list.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, movie_repository_service_1.MovieRepositoryService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map