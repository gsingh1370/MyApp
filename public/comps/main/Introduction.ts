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
    <div class="container">
        <h1>This is a introduction section</h1>
    </div>
    `
})
export  class Introduction {
}


