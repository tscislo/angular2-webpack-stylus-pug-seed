import {Injectable} from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
class WeatherService {

    private urls = {
        warsaw: 'http://api.openweathermap.org/data/2.5/weather?q=warsaw&APPID=7620b144f4990ae6bb3242d77b7f493e&units=metric',
        kielce: 'http://api.openweathermap.org/data/2.5/weather?q=kielce&APPID=7620b144f4990ae6bb3242d77b7f493e&units=metric'
    }

    constructor(private http: Http) {
    }

    public get() {
        return Observable.forkJoin(
            this.http.request(this.urls.warsaw)
                .map((res: any) => res.json())
                .map((res: any) => {
                    return res.main.temp;
                })
                .catch((errorResponse, caught: Observable<any>) => {
                    console.log('error handler')
                    return Observable.throw(errorResponse);
                }),
            this.http.request(this.urls.kielce)
                .map((res: any) => res.json())
                .map((res: any) => {
                    return res.main.temp;
                })
                .catch((errorResponse, caught: Observable<any>) => {
                    console.log('error handler')
                    return Observable.throw(errorResponse);
                })
        )
    }


}

export default WeatherService;



