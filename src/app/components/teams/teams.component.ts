import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
    team = {};

    constructor(private route: ActivatedRoute, private http: Http) {
        this.route.data.subscribe(val => {
            const data = val['team'].json();
            this.team = data;
        });
    }

    ngOnInit() {}

}
