import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Campaign } from './campaign';
import { CampaignService } from './campaign.service';

@Component({
    selector: 'my-campaign-detail',
    templateUrl: 'app/campaign-detail.component.html',
    inputs: ['campaign']
})

export class CampaignDetailComponent {
    public campaign: Campaign;

    constructor(private _campaignService:CampaignService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._campaignService.getCampaign(id)
            .then(hero => this.campaign = hero);
    }

    goBack() {
        window.history.back();
    }
}
