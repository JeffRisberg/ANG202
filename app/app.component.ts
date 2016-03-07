import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Campaign} from './campaign';
import {CampaignService} from './campaign.service';

import {DashboardComponent} from './dashboard.component';
import {CampaignsComponent} from './campaigns.component';
import {CampaignDetailComponent} from './campaign-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [CampaignService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/campaigns', name: 'Campaigns', component: CampaignsComponent},
    {path: '/detail/:id', name: 'CampaignDetail', component: CampaignDetailComponent
    }
])
export class AppComponent {
    public title = 'Campaign Management';
}
