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
var Introduction = (function () {
    function Introduction() {
    }
    Introduction = __decorate([
        angular2_1.Component({
            selector: 'angular-intro'
        }),
        angular2_1.View({
            template: "\n    <div class=\"container \">\n        <!--<div id=\"leftbar\">\n            <a href=\"#\"><h3>Introduction</h3></a><br>\n            <a href=\"#\"><h3>Features</h3></a><br>\n            <a href=\"#\"><h3>Components</h3></a><br>\n            <a href=\"#\"><h3>Views</h3></a><br>\n        </div>\n        <div id=\"content\">\n                <h2>Introduction</h2><br>\n                <p>Angular 2 is a emerging Web application development framework which is built using some best practices\n                </p>\n        </div>-->\n        <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <div id=\"leftbar\">\n            <a href=\"#\"><h5>Introduction</h5></a>\n            <a href=\"#\"><h5>Features</h5></a>\n            <a href=\"#\"><h5>What is Component?</h5></a>\n            <a href=\"#\"><h5>What is View?</h5></a>\n        </div>\n    </div>\n    <div class=\"col-md-10\">\n        <h2>Introduction</h2><br>\n        <p>Angular 2 is a Web application development framework which is built using some best practices\n        </p>\n    </div>\n  </div>\n</div>\n    </div>\n    "
        })
    ], Introduction);
    return Introduction;
})();
exports.Introduction = Introduction;
//# sourceMappingURL=Introduction.js.map