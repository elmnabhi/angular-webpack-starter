import {Component} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
//import '../assets/css/bootstrap.css';
//import '../assets/js/bootstrap.js';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor( notificationsService : NotificationsService) {
    }

    notificationsOptions = {
        timeOut: 3000,
        maxStacks: 2,
        animate: 'fromRight'
    }
}
