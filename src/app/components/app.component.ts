import {Component} from '@angular/core';
import SampleService from '../services/sample.service';

@Component({
    selector: 'my-app',
    template: require('./app.component.pug')
})

export class AppComponent {
    text: string = "My first Angular2 App!"

    constructor(SampleService:SampleService) {
        SampleService.someSampleMethod()

    }

}
