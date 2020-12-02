import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class QuickCreateContact extends LightningElement {
    contactId;
    fname;
    lname;

    @wire(MessageContext) 
    messageContext;

    setfirstName(event){
        this.fname = event.target.value;
    }

    setlastName(event){
        this.lname = event.target.value;
    }

    handlePublish(event){
        const payload  = {
            lmsData:{
                firstName: this.fname,
                lastName: this.lname
            }
        };
        publish(this.messageContext, SAMPLEMC, payload );
    }

    handleSuccess(event){
        this.contactId = event.detail.id;
    }
}
