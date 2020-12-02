import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class QuickCreate extends NavigationMixin(LightningElement) {
    showAllAccount=false;
    showAllContact=false;
    showAllOpp=false;
    accQuickCreate = false;
    conQuickCreate = false;
    oppQuickCreate = false;
    selectedObject = "None";

    changeChooseObj(event){
        const field = event.target.name;
        if (field === 'SelectedObject') {
            this.selectedObject = event.target.value;
        }
    }

    handleQuickCreate(){
        if(this.selectedObject === "Account"){
            this.accQuickCreate = true;
            this.conQuickCreate = false;
            this.oppQuickCreate = false;
        }
        else if(this.selectedObject === "Contact"){
            this.accQuickCreate = false;
            this.conQuickCreate = true;
            this.oppQuickCreate = false;
        }
        else if(this.selectedObject === "Opportunity"){
            this.accQuickCreate = false;
            this.conQuickCreate = false;
            this.oppQuickCreate = true;
        }
        else if(this.selectedObject === "None"){
            alert("Please select an object");
        }
    }

    handleNewRecordCreatePage(){
        if(this.selectedObject === "Account"){
            
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                },
                state:{defaultFieldValue:encodeDefaultFieldValues() }
                
            })
        }
        else if(this.selectedObject === "Contact"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObject === "Opportunity"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObject === "None"){
            alert("Please select an object");
        }
    }

    handleAccSuccess(event){
        this.handleAccReset();
    }

    handleConSuccess(event){
        this.handleConReset();
    }

    handleOppSuccess(event){
        this.handleOppReset();
    }

    handleShow(event){
        if(event.target.name === "allAcc"){
            this.showAllAccount = !this.showAllAccount;
        }
        else if(event.target.name === "allCon"){
            this.showAllContact = !this.showAllContact;
        }
        else if(event.target.name === "allOpp"){
            this.showAllOpp = !this.showAllOpp;
        }
    }

    handleAccReset(){
        const accinputFields = this.template.querySelectorAll('.accnt');
        if(accinputFields){
            accinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleConReset(){
        const coninputFields = this.template.querySelectorAll('.con');
        if(coninputFields){
            coninputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleOppReset(){
        const oppinputFields = this.template.querySelectorAll('.opp');
        if(oppinputFields){
            oppinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleSave(event){
        if(event.target.name === "saveAcc"){
            this.template.querySelectorAll('.accnt').submit();
            
        }
        else if(event.target.name === "saveCon"){
            this.template.querySelectorAll('.con').submit();
            
        }
        else if(event.target.name === "saveOpp"){
            this.template.querySelectorAll('.opp').submit();
            
        }
    }
}