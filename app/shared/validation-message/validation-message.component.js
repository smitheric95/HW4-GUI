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
var ValidationMessageComponent = (function () {
    function ValidationMessageComponent() {
    }
    ValidationMessageComponent.prototype.ngOnInit = function () { console.log(this.target); };
    ;
    Object.defineProperty(ValidationMessageComponent.prototype, "errors", {
        get: function () {
            return this.target.errors ? Object.keys(this.target.errors) : [];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ValidationMessageComponent.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ValidationMessageComponent.prototype, "messages", void 0);
    ValidationMessageComponent = __decorate([
        core_1.Component({
            selector: 'validation-message',
            templateUrl: 'app/shared/validation-message/validation-message.html',
            styleUrls: ['app/shared/validation-message/validation-message.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ValidationMessageComponent);
    return ValidationMessageComponent;
}());
exports.ValidationMessageComponent = ValidationMessageComponent;
//# sourceMappingURL=validation-message.component.js.map