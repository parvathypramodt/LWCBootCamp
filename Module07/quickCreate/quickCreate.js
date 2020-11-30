import { LightningElement } from 'lwc';

export default class QuickCreate extends LightningElement {
    
    booshowAllAccounts=false;
    booshowAllContact=false;
    booshowAllOpp=false;

    handleShowAllFields(event){
        if(event.target.name === "allAccShowHide"){
            this.booshowAllAccounts = !this.booshowAllAccounts;
        }
        else if(event.target.name === "allConShowHide"){
            this.booshowAllContact = !this.booshowAllContact;
        }
        else if(event.target.name === "allOppShowHide"){
            this.booshowAllOpp = !this.booshowAllOpp;
        }
    }
    handleAccSuccess(event){
        this.handleResetAccount();
    }

    handleConSuccess(event){
        this.handleResetContact();
    }
    handleOppSuccess(event){
        this.handleResetOppty();
    }
    handleResetAccount(){
        const accinputFields = this.template.querySelectorAll('.acc');
        if(accinputFields){
            accinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleResetContact(){
        const coninputFields = this.template.querySelectorAll('.con');
        if(coninputFields){
            coninputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleResetOppty(){
        const oppinputFields = this.template.querySelectorAll('.opp');
        if(oppinputFields){
            oppinputFields.forEach(field => {
                field.reset();
            });
        }
    }
}