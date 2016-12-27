import App from './app.base';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

enableProdMode();
platformBrowserDynamic().bootstrapModule(App);