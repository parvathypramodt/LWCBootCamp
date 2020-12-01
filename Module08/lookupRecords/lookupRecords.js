import { LightningElement, wire, track } from 'lwc';
import findAccounts from "@salesforce/apex/AccountController.findAccount";
import getContactList from '@salesforce/apex/AccountController.getContactList';

/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
const columns = [
    { label: 'Id', fieldName: 'Id', hideDefaultActions: true },
    { label: 'Name', fieldName: 'Name', hideDefaultActions: true }
];
export default class ApexDemo extends LightningElement {
    @track contacts;
    @track error;
    searchKey = 'test';
    accountId="null";
    @wire(findAccounts, { searchKey: '$searchKey' })accounts;
    columns = columns;
    showContact = false;
    handleKeyChange(event) {
        
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
    
    getContactForAccounts(event) {
        this.showContact = true;
        this.accountId = event.currentTarget.value;
        
        getContactList({
            accountId: this.accountId
        })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
            console.log('handleAccnt.this.accountId='+this.accountId);
            console.log('handleAccnt.this.contacts='+this.contacts);
        
    }
 

  
        

    
    /*resetSearch() {
        try {
            console.log('resetSearch Start')
            this.searchKey = '  ';
            this.chosenAccount = '';
            this.chosenAccountName = '';
            this.contacts = '';
            this.accounts = '';
        } catch (e) {
            console.log(e);
        }

    }*/
}