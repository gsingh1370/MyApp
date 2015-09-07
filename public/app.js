/**
 * Created by Preet on 9/5/2015.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, View, NgFor, NgIf, bootstrap } from "angular2/angular2";
import { AppNavigationBar } from "comps/navigation/AppNavigationBar";
import { WelcomeBanner } from "comps/main/WelcomeBanner";
import { Introduction } from "comps/main/Introduction";
let LearnAngular = class {
    constructor() {
        this.currentView = 'intro';
    }
    changeView(name) {
        this.currentView = name;
        console.log("Main Change view name is " + name);
    }
};
LearnAngular = __decorate([
    Component({
        selector: 'angular-learning-app'
    }),
    View({
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
], LearnAngular);
bootstrap(LearnAngular);
//# sourceMappingURL=app.js.map