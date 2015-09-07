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
import { Component, View, NgFor, bootstrap } from "angular2/angular2";
import { AppNavigationBar } from "comps/navigation/AppNavigationBar";
let HelloWorld = class {
    constructor() {
        this.names = ['Gurpreet', 'Richard'];
    }
    buttonClicked(name) {
        console.log("Button Clicked " + name);
    }
};
HelloWorld = __decorate([
    Component({
        selector: 'hello-world'
    }),
    View({
        directives: [NgFor, AppNavigationBar],
        template: `
        <app-navigation-bar></app-navigation-bar>
        <a *ng-for="#name of names"
        class="btn btn-primary"
        (click)="buttonClicked(name)">{{name}}</a>
    `
    })
], HelloWorld);
bootstrap(HelloWorld);
//# sourceMappingURL=app.js.map