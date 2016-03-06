import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Campaign} from './campaign';
import {CampaignService} from './campaign.service';

@Component({
    selector: 'my-campaigns',
    templateUrl: 'app/campaigns.component.html',
    styleUrls: ['app/campaigns.component.css']
})

export class CampaignsComponent implements OnInit {
    public title = 'Campaign Management';

    public campaigns:Campaign[];

    public selectedCampaign:Campaign;

    constructor(private _router:Router,
                private _campaignService:CampaignService) {
    }

    getCampaigns() {
        this._campaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });
    }

    ngOnInit() {
        this.getCampaigns();
    }

    onSelect(campaign:Campaign) {
        this.selectedCampaign = campaign;
    }

    gotoDetail() {
        this._router.navigate(['CampaignDetail', {id: this.selectedCampaign.id}]);
    }
}
