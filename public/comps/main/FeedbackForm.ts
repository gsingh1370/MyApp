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
    <form #f="form" (submit)='onSubmit(f.value)' role="form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type='text' ng-control='name' #l="form">

        </div>
                   <!--<div *ng-if="!l.valid">Login is invalid</div>-->

        <div class="form-group">
            <label for="name">Comment</label>
            <input type='text' ng-control='comment'>
        </div>
       <button type='submit' class="btn btn-default">Log in!</button>
     </form>
    `
})
export class FeedbackForm {

    myForm:ControlGroup;

    credentials:{login:string, password:string};

   constructor( fb: FormBuilder) {
        this.myForm = fb.group( {"name": ['', Validators.required], "comment": ['', Validators.required]});
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



