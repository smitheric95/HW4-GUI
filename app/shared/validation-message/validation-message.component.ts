import { Component, Input } from '@angular/core';

@Component({
    selector: 'validation-message',
    templateUrl: 'app/shared/validation-message/validation-message.html',
    styleUrls: [ 'app/shared/validation-message/validation-message.css' ]
})
export class ValidationMessageComponent {
    @Input() target;
    @Input() messages;

    get errors() {
        return this.target.errors ? Object.keys(this.target.errors) : [];
    }
}