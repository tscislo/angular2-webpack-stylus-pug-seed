import {Component} from '@angular/core';
import WeatherService from "../services/weather.service";

@Component({
    selector: 'my-app',
    template: require('./app.component.pug')
})

export class AppComponent {
    text: string = "Weather forecast!"

    private temperature:number;

    constructor(weatherService:WeatherService) {
        weatherService.get().subscribe((temp:any) => {
            this.temperature = temp;
        }, (err) => {
            console.error('Error!', err)
        }, () => {
            console.log('complete')
        })
    }

}
