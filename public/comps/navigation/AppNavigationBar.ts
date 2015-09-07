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
    selector: 'app-navigation-bar'
})
@View({
    template: `
    <nav class="navbar"><a>Intro</a></nav>
    `
})
export  class AppNavigationBar {
    name:String;
    constructor() {
        this.name = 'Gurpreet';
    }
}
