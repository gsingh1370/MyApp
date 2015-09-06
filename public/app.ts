/**
 * Created by Preet on 9/5/2015.
 */

/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import
{
    Component,
    View,
    bootstrap,
} from "angular2/angular2";

@Component({
    selector: 'hello-world'
})
@View({
    template: `<div>Hello Gurpreet</div>`
})
class HelloWorld {

}

bootstrap(HelloWorld);