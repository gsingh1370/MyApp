/**
 * Created by Preet on 9/6/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var AppNavigationBar = (function () {
    function AppNavigationBar() {
        this.changeViewEvent = new angular2_1.EventEmitter();
        this.selectedItem = 'intro';
        this.navItems = new Array();
        this.navItems.push('welcome');
        this.navItems.push('intro');
        this.navItems.push('views');
        this.navItems.push('components');
        this.navItems.push('typeScript');
    }
    AppNavigationBar.prototype.onNavClick = function (item) {
        this.selectedItem = item;
        this.changeViewEvent.next(item);
    };
    AppNavigationBar = __decorate([
        angular2_1.Component({
            selector: 'app-navigation-bar',
            events: ['changeViewEvent']
        }),
        angular2_1.View({
            template: "\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">\n            <h2 (click)=\"onNavClick(navItems[0])\">Angular 2</h2>\n            </a>\n        </div>\n        <div>\n          <ul class=\"nav navbar-nav\">\n            <li id=\"introItem\" [class.active]=\"selectedItem == navItems[1]\">\n                <a href=\"#\" (click)=\"onNavClick(navItems[1])\">INTRODUCTION</a>\n            </li>\n\n            <li id=\"viewsItem\" [class.active]=\"selectedItem == navItems[2]\">\n                <a href=\"#\" (click)=\"onNavClick(navItems[2])\">VIEWS</a>\n            </li>\n\n            <li id=\"componentsItem\" [class.active]=\"selectedItem == navItems[3]\">\n                <a href=\"#\" (click)=\"onNavClick(navItems[3])\">COMPONENTS</a>\n            </li>\n\n            <li id=\"typeScriptItem\" [class.active]=\"selectedItem == navItems[4]\">\n                <a href=\"#\" (click)=\"onNavClick(navItems[4])\">TYPESCRIPT</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    "
        })
    ], AppNavigationBar);
    return AppNavigationBar;
})();
exports.AppNavigationBar = AppNavigationBar;
//# sourceMappingURL=AppNavigationBar.js.map