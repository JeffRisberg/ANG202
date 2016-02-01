import {Component, OnInit} from 'angular2/core';
import {Campaign} from './campaign';
import {CampaignDetailComponent} from './campaign-detail.component';
import {CampaignService} from './campaign.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .campaigns {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 400px;
    }
    .campaigns li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .campaigns li.selected:hover {
      color: white;
    }
    .campaigns li:hover {
      color: #607D8B;
      font-weight: bold;
      background-color: #EEE;
    }
    .campaigns .text {
      position: relative;
      top: -3px;
    }
    .campaigns .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
    directives: [CampaignDetailComponent],
    providers: [CampaignService]
})

export class AppComponent implements OnInit {
    public title = 'Campaign Management';
    public campaigns: Campaign[];
    public selectedCampaign: Campaign;

    constructor(private _campaignService: CampaignService) { }

    getCampaigns() {
        this._campaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });
    }

    ngOnInit() {
        this.getCampaigns();
    }

    onSelect(campaign: Campaign) { this.selectedCampaign = campaign; }
}
