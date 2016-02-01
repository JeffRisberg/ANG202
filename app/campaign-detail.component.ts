import {Component} from 'angular2/core';
import {Campaign} from './campaign';

@Component({
    selector: 'my-campaign-detail',
    templateUrl: 'app/campaign-detail.component.html',
    inputs: ['campaign']
})

export class CampaignDetailComponent {
    public campaign: Campaign;
}
