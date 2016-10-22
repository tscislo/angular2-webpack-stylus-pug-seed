import {Injectable} from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
class WeatherService {

    private url = 'http://api.openweathermap.org/data/2.5/weather?q=warsaw&APPID=7620b144f4990ae6bb3242d77b7f493e&units=metric';

    constructor(private http:Http) {

    }

    public get() {
        return this.http.request(this.url)
            .map((res: any) => res.json())
            .map((res: any) => {
                return res.main.temp;
            })
            .catch((err, caught:Observable<any>) => {
                console.log('error handler')
                return caught
            })
    }



}

export default WeatherService;



