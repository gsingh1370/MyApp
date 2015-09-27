/**
 * Created by Preet on 9/12/2015.
 */

/// <reference path="../../typings/angular2/angular2.d.ts"/>

import { Component, View, Inject, NgIf, NgControl } from "angular2/angular2";

import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/angular2';

@Component({
    selector: 'feedback-form',
    viewBindings:[FormBuilder]
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
    <form #f="form" (submit)='onLogIn(f.value)'>
                   Login <input type='text' ng-control='login' #l="form">
                   <!--<div *ng-if="!l.valid">Login is invalid</div>-->

                   Password <input type='password' ng-control='password'>

                   <button type='submit'>Log in!</button>
                 </form>
    `
})
export class FeedbackForm {

    myForm:ControlGroup;

    credentials:{login:string, password:string};

   constructor( fb: FormBuilder) {
        this.myForm = fb.group( {"login": ['abc', Validators.required], "password": ['test']});
       // this.myForm.controls = { "sku" : ['abc']};
        console.log("FeedbackForm constructor called");
    }

    onSubmit(value) {
        console.log('you submitted value: ', value);
    }

    onLogIn(value) {
        console.log("LOgin");
    }
}



