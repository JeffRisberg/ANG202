import { Component, OnInit} from 'angular2/core';
import { Router, RouteConfig } from 'angular2/router';

import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import { CampaignsListComponent } from './campaigns.list.component';

@Component({
    selector: 'my-campaigns',
    templateUrl: 'app/campaigns/campaigns-byName.component.html',
    styleUrls: ['app/campaigns/campaigns.component.css']
})
export class CampaignsByNameComponent extends CampaignsListComponent {

    // this could also be moved into superclass
    public selectedCampaign:Campaign;

    constructor(protected _router:Router,
                protected _campaignService:CampaignService) {
        super(_router, _campaignService);
    }

    onSelect(campaign:Campaign) {
        this.selectedCampaign = campaign;
    }

    gotoDetail() {
        this._router.parent.navigate(['CampaignDetail', {id: this.selectedCampaign.id}]);
    }
}
