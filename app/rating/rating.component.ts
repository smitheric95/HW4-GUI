import { Component, Input } from '@angular/core';

@Component({
    selector: 'rating',
    template: `
        <span class="glyphicon" *ngFor="let value of [1,2,3,4,5]"
		      [ngClass]="{ 'glyphicon-star': this.model.rating >= value, 'glyphicon-star-empty': (this.model.rating||0) < value }"
		      (click)="this.model.rating = value"></span>
		<span class="badge">{{this.model.rating || 0}}/5</span>
    `
})
export class RatingComponent {
    @Input() model: any;

}