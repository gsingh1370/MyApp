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
/// <reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require("angular2/angular2");
var angular2_2 = require("angular2/angular2");
var FeedbackForm = (function () {
    function FeedbackForm() {
    }
    //    myForm:ControlGroup;
    //  credentials:{login:string, password:string};
    /*    constructor(fb : FormBuilder ) {
            this.myForm = fb.group({"sku": ['abc']});
            // this.myForm.controls = { "sku" : ['abc']};
            console.log("FeedbackForm constructor called");
        }
    
        onSubmit(value) {
            console.log('you submitted value: ', value);
        }
    */
    FeedbackForm.prototype.onLogIn = function (value) {
        console.log("LOgin");
    };
    FeedbackForm = __decorate([
        angular2_1.Component({
            selector: 'feedback-form',
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES],
            template: "\n    <form #f=\"form\" (submit)='onLogIn(f.value)'>\n                   Login <input type='text' ng-control='login' #l=\"form\">\n                   <div *ng-if=\"!l.valid\">Login is invalid</div>\n\n                   Password <input type='password' ng-control='password'>\n\n                   <button type='submit'>Log in!</button>\n                 </form>\n    "
        })
    ], FeedbackForm);
    return FeedbackForm;
})();
exports.FeedbackForm = FeedbackForm;
//# sourceMappingURL=FeedbackForm.js.map