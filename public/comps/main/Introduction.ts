/**
 * Created by Preet on 9/6/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts"/>

import
{
    Component,
    View,
} from "angular2/angular2";

import { FeedbackForm } from "./FeedbackForm";

@Component({
    selector: 'angular-intro'
})
@View({
    directives: [FeedbackForm],
    template: `
<div class="container">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
                <div id="leftbar">
                    <a href="#"><h5>Introduction</h5></a>
                    <a href="#"><h5>Features</h5></a>
                    <a href="#"><h5>What is Component?</h5></a>
                    <a href="#"><h5>What is View?</h5></a>
                </div>
            </div>
            <div class="col-md-10">
                <h2>Introduction</h2><br>
                <p>Angular 2 is a Web application development framework which is built using some best practices
                </p>
                <feedback-form></feedback-form>
            </div>
          </div>
        </div>
        </div>
    `
})
export  class Introduction {
}


