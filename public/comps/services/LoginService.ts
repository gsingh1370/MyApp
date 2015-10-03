/**
 * Created by Preet on 10/3/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Injectable, bind} from "angular2/angular2";
import * as Rx from "rx";
import {Http, Response} from "angular2/http";

@Injectable()
export class LoginService {

    loading:boolean = false;

    data:any;

    constructor(public http:Http) {

    }

    public login(login) {

        console.log("User Successfully Logged with login: and password:" + login.name);

        this.loading = true;

        this.http.request("http://localhost:3001/login")
            .toRx()
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
                console.log("Result received is " + this.data.loginStatus);
            });
    }
}

export var loginServiceInjectables: Array<any> = [
    bind(LoginService).toClass(LoginService)
];