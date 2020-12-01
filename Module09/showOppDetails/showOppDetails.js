import { LightningElement, wire, api } from 'lwc';
import findOpportunity from '@salesforce/apex/OpportunityController.findOpportunity';
import { getRecord } from 'lightning/uiRecordApi';

export default class ShowOppDetails extends LightningElement {
    @api recordId;
    searchKey = '';
    oppId = '';
    showOpp = false;
    name = '';
    closeDate = '';
    amount = '';
    stage = '';
    progress = '';

    @wire(findOpportunity, {searchKey: "$searchKey", recordId: "$recordId"})
    opportunitySearchResult;

   
    steps = [
        { label: 'Prospecting', value: 'step-1' },
        { label: 'Qualification', value: 'step-2' },
        { label: 'Needs Analysis', value: 'step-3' },
        { label: 'Id.Decision Makers', value: 'step-4' },
        { label: 'Perception Analysis', value: 'step-5' },
        { label: 'Proposal/Price Quote', value: 'step-6' },
        { label: 'Negotiation/Review', value: 'step-7' },
        { label: 'Closed', value: 'step-8' },
    ];


    @wire(getRecord, { recordId: '$oppId', layoutTypes: ['Full', 'Compact'], modes:['View'] })
    selectedppportunityrecord({ data, error }) {
        if (data) {
            this.name = data.fields.Name.value;
            this.closeDate = data.fields.CloseDate.value;
            this.amount = data.fields.Amount.value;
            this.stage = data.fields.StageName.value;
            if(this.stage === "Prospecting"){
                this.progress = "step-1"
            }
            else if(this.stage === "Qualification"){
                this.progress = "step-2"
            }
            else if(this.stage === "Needs Analysis"){
                this.progress = "step-3"
            }
            else if(this.stage === "Id.Decision Makers"){
                this.progress = "step-4"
            }
            else if(this.stage === "Perception Analysis"){
                this.progress = "step-5"
            }
            else if(this.stage === "Proposal/Price Quote"){
                this.progress = "step-6"
            }
            else if(this.stage === "Negotiation/Review"){
                this.progress = "step-7"
            }
            else if(this.stage === "Closed Won" || this.stage === "Closed Lost"){
                this.progress = "step-8"
            }
            
        } else if (error) {
            console.log(error);
        }
    }
    
    handleSearchKeyChange(event){
        this.searchKey = event.target.value;
    }

    selectOpportunity(event){
        this.oppId = event.currentTarget.value;
        this.showOpp = true;
        this.searchKey = '';
    }

    
}