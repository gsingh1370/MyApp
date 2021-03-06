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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts"/>
var angular2_1 = require("angular2/angular2");
var services_1 = require("./comps/services/services");
var AppNavigationBar_1 = require("./comps/navigation/AppNavigationBar");
var WelcomeBanner_1 = require("./comps/main/WelcomeBanner");
var Introduction_1 = require("./comps/main/Introduction");
var http_1 = require("angular2/http");
var LearnAngular = (function () {
    function LearnAngular() {
        this.currentView = 'intro';
    }
    LearnAngular.prototype.changeView = function (name) {
        this.currentView = name;
        console.log("Main Change view name is " + name);
    };
    LearnAngular = __decorate([
        angular2_1.Component({
            selector: 'angular-learning-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, AppNavigationBar_1.AppNavigationBar, WelcomeBanner_1.WelcomeBanner, angular2_1.NgIf, Introduction_1.Introduction],
            template: "\n        <app-navigation-bar (change-view-event)=\"changeView($event)\"></app-navigation-bar>\n        <welcome-banner *ng-if=\"currentView=='welcome'\"></welcome-banner>\n        <angular-intro *ng-if=\"currentView =='intro'\" ></angular-intro>\n\n        <!--<a *ng-for=\"#name of names\"\n        class=\"btn btn-primary\"\n        (click)=\"buttonClicked(name)\">{{name}}</a>-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LearnAngular);
    return LearnAngular;
})();
angular2_1.bootstrap(LearnAngular, [services_1.servicesInjectables, http_1.HTTP_BINDINGS]);

//# sourceMappingURL=app.js.map