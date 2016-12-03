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
var platform_browser_1 = require('@angular/platform-browser');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var forms_1 = require('@angular/forms');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_editor_component_1 = require('./movie-editor/movie-editor.component');
var router_1 = require('@angular/router');
var shared_module_1 = require('../shared/shared.module');
var mock_api_service_1 = require('../mock-api.service');
var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            id: 'movies',
            declarations: [
                movie_list_component_1.MovieListComponent,
                movie_editor_component_1.MovieEditorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: movie_list_component_1.MovieListComponent },
                    { path: 'add', component: movie_editor_component_1.MovieEditorComponent },
                    { path: 'edit/:id', component: movie_editor_component_1.MovieEditorComponent }
                ]),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_api_service_1.MockApiService),
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map