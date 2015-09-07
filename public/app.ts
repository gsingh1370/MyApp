/**
 * Created by Preet on 9/5/2015.
 */

/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import
{
    Component,
    View,
    NgFor,
    bootstrap,
} from "angular2/angular2";

import { AppNavigationBar } from "comps/navigation/AppNavigationBar";

@Component({
    selector: 'hello-world'
})
@View({
    directives: [NgFor, AppNavigationBar],
    template: `
        <app-navigation-bar></app-navigation-bar>
        <a *ng-for="#name of names"
        class="btn btn-primary"
        (click)="buttonClicked(name)">{{name}}</a>
    `

})
class HelloWorld {
    names:Array<string>;
    constructor() {
        this.names = ['Gurpreet', 'Richard'];
    }
    buttonClicked(name) {
        console.log("Button Clicked " + name);
    }
}

bootstrap(HelloWorld);