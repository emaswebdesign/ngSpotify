import { Component} from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [SearchComponent],
    providers:[HTTP_PROVIDERS]
})

export class AppComponent{}


