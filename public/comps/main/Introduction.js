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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var FeedbackForm_1 = require("./FeedbackForm");
var Introduction = (function () {
    function Introduction() {
    }
    Introduction = __decorate([
        angular2_1.Component({
            selector: 'angular-intro'
        }),
        angular2_1.View({
            directives: [FeedbackForm_1.FeedbackForm],
            template: "\n<div class=\"container\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n                <div id=\"leftbar\">\n                    <a href=\"#\"><h5>Introduction</h5></a>\n                    <a href=\"#\"><h5>Features</h5></a>\n                    <a href=\"#\"><h5>What is Component?</h5></a>\n                    <a href=\"#\"><h5>What is View?</h5></a>\n                </div>\n            </div>\n            <div class=\"col-md-10\">\n                <h2>Introduction</h2><br>\n                <p>Angular 2 is a Web application development framework which is built using some best practices\n                </p>\n                <feedback-form></feedback-form>\n            </div>\n          </div>\n        </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Introduction);
    return Introduction;
})();
exports.Introduction = Introduction;

//# sourceMappingURL=../../comps/main/Introduction.js.map