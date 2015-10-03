/**
 * Created by Preet on 9/12/2015.
 */

/// <reference path="../../typings/angular2/angular2.d.ts"/>

import { Component, View, Inject, NgIf, NgControl, LifecycleEvent } from "angular2/angular2";

import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/angular2';

import * as Rx from "rx";

import  { LoginService } from "../services/LoginService"

@Component({
    lifecycle: [ LifecycleEvent.onInit ],
    selector: 'feedback-form',
    viewBindings:[FormBuilder]
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
    <form #f="form" (submit)='onSubmit(f.value)' role="form" class="form-horizontal">
        <div class="form-group">
            <label for="name" class="control-label col-sm-2" >Name</label>
            <div class="col-sm-4">
                <input type='text' ng-control='name' #l="form" class="form-control">
            </div>

        </div>
                   <!--<div *ng-if="!l.valid">Login is invalid</div>-->

        <div class="form-group">
            <label for="name" class="control-label col-sm-2">Comment</label>
            <div class="col-sm-4">
                <input type='text' ng-control='comment' class="form-control">
            </div>
        </div>
        <div class="col-sm-offset-2 col-sm-4">
            <button type='submit' class="btn btn-default">Log in!</button>
        </div>
     </form>
    `
})
export class FeedbackForm {

    myForm:ControlGroup;

    clickStream:Rx.Observable;

    credentials:{login:string, password:string};

   constructor( public fb: FormBuilder, public loginService:LoginService) {
        this.myForm = fb.group( {"name": ['', Validators.required], "comment": ['', Validators.required]});
        console.log("FeedbackForm constructor called");
    }

    onInit() {

    }

    onSubmit(value) {
        console.log('you submitted value: ', value);
        this.loginService.login(value);
    }

}



