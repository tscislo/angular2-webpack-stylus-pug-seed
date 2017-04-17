import {Component} from '@angular/core';
import WeatherService from "../services/weather.service";

@Component({
    selector: 'my-app',
    template: require('./app.component.pug')
})

export class AppComponent {
    text: string = "Weather forecast!"

    private temperatures = [];

    constructor(weatherService:WeatherService) {
        weatherService.get().subscribe((results) => {
            this.temperatures = results;
        }, (err) => {
            console.error('Error!', err)
        }, () => {
            console.log('complete')
        })
    }

}
