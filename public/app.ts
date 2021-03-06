/**
 * Created by Preet on 9/5/2015.
 */

/// <reference path="typings/angular2/angular2.d.ts"/>

import
{
    Component,
    View,
    NgFor,
    NgIf,
    bootstrap,
} from "angular2/angular2";

import {FormBuilder,  ControlGroup, FORM_DIRECTIVES} from "angular2/angular2";

import {servicesInjectables} from "./comps/services/services";

import { AppNavigationBar } from "./comps/navigation/AppNavigationBar";
import { WelcomeBanner } from "./comps/main/WelcomeBanner";
import { Introduction } from "./comps/main/Introduction";

import {HTTP_BINDINGS} from "angular2/http";


@Component({
    selector: 'angular-learning-app'
})
@View({
    directives: [NgFor, AppNavigationBar, WelcomeBanner, NgIf, Introduction],
    template: `
        <app-navigation-bar (change-view-event)="changeView($event)"></app-navigation-bar>
        <welcome-banner *ng-if="currentView=='welcome'"></welcome-banner>
        <angular-intro *ng-if="currentView =='intro'" ></angular-intro>

        <!--<a *ng-for="#name of names"
        class="btn btn-primary"
        (click)="buttonClicked(name)">{{name}}</a>-->
    `

})
class LearnAngular {

    currentView:String;

    constructor() {
        this.currentView = 'intro';
    }
    changeView(name):void {
        this.currentView = name;
        console.log("Main Change view name is " + name);
    }
    /*names:Array<string>;
    constructor() {
        this.names = ['Gurpreet', 'Richard'];
    }
    buttonClicked(name) {
        console.log("Button Clicked " + name);
    }*/
}

bootstrap(LearnAngular, [servicesInjectables, HTTP_BINDINGS ]);