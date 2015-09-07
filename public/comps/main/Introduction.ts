/**
 * Created by Preet on 9/6/2015.
 */
/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import
{
    Component,
    View,
} from "angular2/angular2";

@Component({
    selector: 'angular-intro'
})
@View({
    template: `
    <div class="container ">
        <!--<div id="leftbar">
            <a href="#"><h3>Introduction</h3></a><br>
            <a href="#"><h3>Features</h3></a><br>
            <a href="#"><h3>Components</h3></a><br>
            <a href="#"><h3>Views</h3></a><br>
        </div>
        <div id="content">
                <h2>Introduction</h2><br>
                <p>Angular 2 is a emerging Web application development framework which is built using some best practices
                </p>
        </div>-->
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
        <p>Angular 2 is a emerging Web application development framework which is built using some best practices
        </p>
    </div>
  </div>
</div>
    </div>
    `
})
export  class Introduction {
}


