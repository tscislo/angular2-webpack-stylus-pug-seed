import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.component.pug')
})

export class AppComponent {
    text: string = "My first Angular2 App!"

}
