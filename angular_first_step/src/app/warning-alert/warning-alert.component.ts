import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>warning alert!</p>
    `,
    styles: [
        `
            p {
                padding: 20px;
                background-color: red;
            }
        `
    ]
})
export class WarningAlertComponent {

}