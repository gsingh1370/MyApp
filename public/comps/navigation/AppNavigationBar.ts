/**
 * Created by Preet on 9/6/2015.
 */
/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import
{
    Component,
    EventEmitter,
    View,
} from "angular2/angular2";

@Component({
    selector: 'app-navigation-bar',
    events:['changeViewEvent']

})
@View({
    template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Angular 2</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Introduction</a></li>
            <li><a href="#" (click)="onNavClick('views')">Views</a></li>
            <li><a href="#" (click)="onNavClick('components')">Components</a></li>
            <li><a href="#" (click)="onNavClick('typeScript')">Type Script</a></li>
          </ul>
        </div>
      </div>
    </nav>
    `
})
export  class AppNavigationBar {
    changeViewEvent:EventEmitter;

    constructor() {
        this.changeViewEvent = new EventEmitter();
    }

    onNavClick(item):void {
        let a = 0;
        console.log("item click = " + item + a);
        this.changeViewEvent.next(item);
    }
}
