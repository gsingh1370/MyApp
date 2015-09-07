/**
 * Created by Preet on 9/6/2015.
 */
/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import
{
    Component,
    EventEmitter,
    View,
} from "angular2/angular2";

@Component({
    selector: 'app-navigation-bar',
    events:['changeViewEvent']

})
@View({
    template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <h2 (click)="onNavClick(navItems[0])">Angular 2</h2>
            </a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li id="introItem" [class.active]="selectedItem == navItems[1]">
                <a href="#" (click)="onNavClick(navItems[1])">INTRODUCTION</a>
            </li>

            <li id="viewsItem" [class.active]="selectedItem == navItems[2]">
                <a href="#" (click)="onNavClick(navItems[2])">VIEWS</a>
            </li>

            <li id="componentsItem" [class.active]="selectedItem == navItems[3]">
                <a href="#" (click)="onNavClick(navItems[3])">COMPONENTS</a>
            </li>

            <li id="typeScriptItem" [class.active]="selectedItem == navItems[4]">
                <a href="#" (click)="onNavClick(navItems[4])">TYPESCRIPT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
})
export  class AppNavigationBar {
    changeViewEvent:EventEmitter;
    navItems:Array<String>;
    selectedItem:String;

    constructor() {
        this.changeViewEvent = new EventEmitter();
        this.selectedItem = 'intro';

        this.navItems = new Array();
        this.navItems.push('welcome');
        this.navItems.push('intro');
        this.navItems.push('views');
        this.navItems.push('components');
        this.navItems.push('typeScript');

    }

    onNavClick(item):void {
        this.selectedItem = item;
        this.changeViewEvent.next(item);
    }
}
