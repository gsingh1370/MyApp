/**
 * Created by Preet on 9/6/2015.
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
/// <reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require("angular2/angular2");
var WelcomeBanner = (function () {
    function WelcomeBanner() {
    }
    WelcomeBanner = __decorate([
        angular2_1.Component({
            selector: 'welcome-banner'
        }),
        angular2_1.View({
            template: "\n    <div class=\"container\">\n        <h1>Welcome to Angular 2 Learning Center</h1>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeBanner);
    return WelcomeBanner;
})();
exports.WelcomeBanner = WelcomeBanner;

//# sourceMappingURL=../../comps/main/WelcomeBanner.js.map