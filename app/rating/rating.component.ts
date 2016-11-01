import { Component, Input } from '@angular/core';

@Component({
    selector: 'rating',
    template: `
        <span class="glyphicon" *ngFor="let value of [1,2,3,4,5]"
		      [ngClass]="{ 'glyphicon-star': this.model >= value, 'glyphicon-star-empty': (this.model||0) < value }"
		      (click)="this.model = value"></span>
		<span class="badge">{{this.model || 0}}/5</span>
    `
})
export class RatingComponent {
    @Input() model: any;

    ngOnInit(){
        this.model = 0;
    }

}