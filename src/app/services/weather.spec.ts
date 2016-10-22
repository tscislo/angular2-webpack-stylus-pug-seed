import {
    inject,
    tick,
    TestBed,
    fakeAsync
} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions
} from '@angular/http';
import WeatherService from "./weather.service";

describe('WeatherService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                WeatherService,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend,
                                 defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
            ]
        });
    });


    it('should be defined', inject([WeatherService], (WeatherService: WeatherService) => {
        expect(WeatherService).toBeDefined()
    }));

    it('should get weather data', inject([WeatherService, MockBackend], fakeAsync((WeatherService: WeatherService, MockBackend: MockBackend) => {
        MockBackend.connections.subscribe(c => {
            expect(c.request.url).toBe('http://api.openweathermap.org/data/2.5/weather?q=warsaw&APPID=7620b144f4990ae6bb3242d77b7f493e&units=metric');
            let response = new ResponseOptions({
                body: {
                    "coord": {"lon": 21.01, "lat": 52.23},
                    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
                    "base": "stations",
                    "main": {
                        "temp": 7.52,
                        "pressure": 1017.89,
                        "humidity": 100,
                        "temp_min": 7.52,
                        "temp_max": 7.52,
                        "sea_level": 1030.31,
                        "grnd_level": 1017.89
                    },
                    "wind": {"speed": 2.81, "deg": 249.008},
                    "clouds": {"all": 80},
                    "dt": 1477160811,
                    "sys": {"message": 0.0056, "country": "PL", "sunrise": 1477113316, "sunset": 1477149863},
                    "id": 756135,
                    "name": "Warsaw",
                    "cod": 200
                }
            });
            c.mockRespond(new Response(response));
        });
        WeatherService.get().subscribe((temp: any) => {
            expect(temp).toBe(7.52);
        })
        tick();
    })));

});