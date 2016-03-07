import { Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

export class CampaignsListComponent implements OnInit {

    public campaigns:Campaign[];

    constructor(protected _router:Router,
                protected _campaignService:CampaignService) {
    }

    getCampaigns() {
        this._campaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });
    }

    ngOnInit() {
        this.getCampaigns();
    }
}
