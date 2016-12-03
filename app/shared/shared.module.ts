import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ValidationMessageComponent } from './validation-message/validation-message.component'
import { RatingComponent } from './rating/rating.component'
@NgModule({
	id: 'shared',
	imports: [
		BrowserModule,
		RouterModule
	],
	declarations: [
		ValidationMessageComponent,
        RatingComponent
	],
	exports: [
        ValidationMessageComponent,
		RatingComponent
	]
})

export class SharedModule { }