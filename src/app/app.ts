import 'es5-shim';
import 'es6-shim';

import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone';

import '@angular/common';
import '@angular/compiler';
import '@angular/core';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/forms';
import '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppComponent} from './components/app.component';
import SampleService from './services/sample.service';

require('../styl/index.styl');

console.log('app.ts');

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        SampleService
    ]
})
class AppSurvey {
}

platformBrowserDynamic().bootstrapModule(AppSurvey);