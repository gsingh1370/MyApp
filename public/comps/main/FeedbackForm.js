/**
 * Created by Preet on 9/12/2015.
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
var angular2_2 = require('angular2/angular2');
var LoginService_1 = require("../services/LoginService");
var FeedbackForm = (function () {
    function FeedbackForm(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
        this.myForm = fb.group({ "name": ['', angular2_2.Validators.required], "comment": ['', angular2_2.Validators.required] });
        console.log("FeedbackForm constructor called");
    }
    FeedbackForm.prototype.onInit = function () {
    };
    FeedbackForm.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
        this.loginService.login(value);
    };
    FeedbackForm = __decorate([
        angular2_1.Component({
            lifecycle: [angular2_1.LifecycleEvent.onInit],
            selector: 'feedback-form',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgIf],
            template: "\n    <form #f=\"form\" (submit)='onSubmit(f.value)' role=\"form\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"name\" class=\"control-label col-sm-2\" >Name</label>\n            <div class=\"col-sm-4\">\n                <input type='text' ng-control='name' #l=\"form\" class=\"form-control\">\n            </div>\n\n        </div>\n                   <!--<div *ng-if=\"!l.valid\">Login is invalid</div>-->\n\n        <div class=\"form-group\">\n            <label for=\"name\" class=\"control-label col-sm-2\">Comment</label>\n            <div class=\"col-sm-4\">\n                <input type='text' ng-control='comment' class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-sm-offset-2 col-sm-4\">\n            <button type='submit' class=\"btn btn-default\">Log in!</button>\n        </div>\n     </form>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder, LoginService_1.LoginService])
    ], FeedbackForm);
    return FeedbackForm;
})();
exports.FeedbackForm = FeedbackForm;

//# sourceMappingURL=../../comps/main/FeedbackForm.js.map