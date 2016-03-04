import {Component, OnInit} from 'angular2/core';
import {Router, Location} from 'angular2/router';

import {Campaign} from './campaign';
import {CampaignService} from './campaign.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    campaigns:Campaign[] = [];

    constructor(
        private _router: Router,
        private _campaignService: CampaignService) {
    }

    ngOnInit() {
        this._campaignService.getCampaigns()
            .then(campaigns => this.campaigns = campaigns.slice(1, 4));
    }

    gotoDetail(campaign: Campaign) {
        let link = ['CampaignDetail', { id: campaign.id }];
        this._router.navigate(link);
    }
}