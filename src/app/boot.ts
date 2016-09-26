import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppComponent} from './components/app.component';

require('../styl/index.styl');

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})
class AppSurvey {
}

platformBrowserDynamic().bootstrapModule(AppSurvey);