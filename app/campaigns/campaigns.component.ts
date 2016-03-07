import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {Campaign} from '../campaign';
import {CampaignService} from '../campaign.service';
import {CampaignsByNameComponent} from './campaigns-byName.component';
import {CampaignsByTypeComponent} from './campaigns-byType.component';

@Component({
    selector: 'my-campaigns',
    templateUrl: 'app/campaigns/campaigns.component.html',
    styleUrls: ['app/campaigns/campaigns.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/byName', name: 'ByName', component: CampaignsByNameComponent, useAsDefault: true},
    {path: '/byType', name: 'ByType', component: CampaignsByTypeComponent}
])
export class CampaignsComponent implements OnInit {

    constructor(private _router:Router,
                private _campaignService:CampaignService) {
    }

    ngOnInit() { // this seems to be needed, or else we get a router definition error
    }
}
