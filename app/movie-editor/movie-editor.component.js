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
var MovieEditorComponent = (function () {
    function MovieEditorComponent(route, router, movieRepositoryService) {
        this.route = route;
        this.router = router;
        this.movieRepositoryService = movieRepositoryService;
    }
    MovieEditorComponent.prototype.ngOnInit = function () {
        this.movie = {};
        this.years = Array.from(new Array(117), function (x, i) { return i + 1900; });
        this.years.reverse();
    };
    MovieEditorComponent.prototype.save = function () {
        this.movieRepositoryService.add(this.movie);
        this.router.navigateByUrl('');
    };
    MovieEditorComponent = __decorate([
        core_1.Component({
            selector: 'movie-editor',
            templateUrl: './app/movie-editor/movie-editor.html',
            styleUrls: ['./app/movie-editor/movie-editor.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, movie_repository_service_1.MovieRepositoryService])
    ], MovieEditorComponent);
    return MovieEditorComponent;
}());
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.component.js.map