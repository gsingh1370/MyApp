/**
 * Created by Preet on 9/12/2015.
 */

/// <reference path="../../typings/angular2/angular2.d.ts"/>

import { Component, View, Inject } from "angular2/angular2";

import {FormBuilder,  ControlGroup, FORM_DIRECTIVES,} from "angular2/angular2";

import * as Rx from "rx";

@Component({
    selector: 'feedback-form',
//    viewBindings:[FormBuilder]
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
    <form #f="form" (submit)='onLogIn(f.value)'>
                   Login <input type='text' ng-control='login' #l="form">
                   <div *ng-if="!l.valid">Login is invalid</div>

                   Password <input type='password' ng-control='password'>

                   <button type='submit'>Log in!</button>
                 </form>
    `
})
export class FeedbackForm {

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
    onLogIn(value) {
        console.log("LOgin");
    }
}



