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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MovieRepositoryService = (function () {
    function MovieRepositoryService(http) {
        this.http = http;
        this._apiUrl = 'app/movies';
    }
    MovieRepositoryService.prototype.list = function () {
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(function (x) { return x.json().data; });
    };
    MovieRepositoryService.prototype.get = function (id) {
        var pluck = function (x) { return (x && x.length) ? x[0] : undefined; };
        return this.http
            .get(this._apiUrl + "/?id=" + id)
            .toPromise()
            .then(function (x) { return pluck(x.json().data); })
            .catch(function (x) { return alert(x.json().error); });
    };
    MovieRepositoryService.prototype.add = function (movie) {
        return this.http
            .post(this._apiUrl, movie)
            .toPromise()
            .then(function () { return movie; })
            .catch(function (x) { return alert(x.json().error); });
    };
    MovieRepositoryService.prototype.update = function (movie) {
        return this.http
            .put(this._apiUrl + "/" + movie.id, movie)
            .toPromise()
            .then(function () { return movie; })
            .catch(function (x) { return alert(x.json().error); });
    };
    MovieRepositoryService.prototype.delete = function (movie) {
        return this.http
            .delete(this._apiUrl + "/" + movie.id, movie)
            .toPromise()
            .catch(function (x) { return alert(x.json().error); });
    };
    MovieRepositoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieRepositoryService);
    return MovieRepositoryService;
}());
exports.MovieRepositoryService = MovieRepositoryService;
//# sourceMappingURL=movie-repository.service.js.map