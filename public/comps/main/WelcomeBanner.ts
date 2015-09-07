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
    selector: 'welcome-banner'
})
@View({
    template: `
    <div class="container">
        <h1>Welcome to Angular 2 Learning Center</h1>
    </div>
    `
})
export  class WelcomeBanner {
}

