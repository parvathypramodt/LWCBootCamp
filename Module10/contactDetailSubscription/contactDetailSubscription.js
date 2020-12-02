import { LightningElement, wire, track } from 'lwc';
//import LMS method and Message Channel
import { APPLICATION_SCOPE, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class QuickCreateContactSubscriber extends LightningElement {
    subscription = null;
    receivedMessage = '';
    @track arrayMessage = [];

    //Create MessageContext Object using @wire
    @wire(MessageContext) messageContext;

    subscribeMC(){
        
        //Check if subscription already exists, if so, return it
        if(this.subscription){
            return;
            
        }
        //if subscription doesn't exists, subscribe to Message Channel
        //process message using handleMessage function
        this.subscription = subscribe(
                                this.messageContext, SAMPLEMC, (message) => {
                                    this.handleMessage(message);
                                }, {scope: APPLICATION_SCOPE});
        
    }

    unsubscribeMC(){
        //unsubscribe the current subscription
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message){
        //if message has data, then retrieve the fields from the message and display
        if(message){
            this.receivedMessage = message.lmsData.firstName + ' ' + message.lmsData.lastName;
            this.arrayMessage.push(this.receivedMessage);
            console.log(this.arrayMessage);
        }
    }

    ResetAll(){
        this.arrayMessage = [];
        this.receivedMessage = '';
    }

}