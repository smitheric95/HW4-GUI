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
var RatingComponent = (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.model = 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "model", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'rating',
            template: "\n        <span class=\"glyphicon\" *ngFor=\"let value of [1,2,3,4,5]\"\n\t\t      [ngClass]=\"{ 'glyphicon-star': this.model >= value, 'glyphicon-star-empty': (this.model||0) < value }\"\n\t\t      (click)=\"this.model = value\"></span>\n\t\t<span class=\"badge\">{{this.model || 0}}/5</span>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map