import {
    inject,
    TestBed
} from '@angular/core/testing';
import SampleService from "./sample.service";

describe('SampleService', () => {


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SampleService,
            ]
        });
    });


    it('should be defined', inject([SampleService], (SampleService: SampleService) => {
        expect(SampleService).toBeDefined()
    }));
});