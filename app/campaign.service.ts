import {Injectable} from 'angular2/core';
import {Campaign} from './Campaign';
import {CAMPAIGNS} from './mock-campaigns';

@Injectable()
export class CampaignService {
    getCampaigns() {
        return Promise.resolve(CAMPAIGNS);
    }

    // See the "Take it slow" appendix
    getCampaignsSlowly() {
        return new Promise<Campaign[]>(resolve =>
                setTimeout(()=>resolve(CAMPAIGNS), 2000) // 2 seconds
        );
    }
}
