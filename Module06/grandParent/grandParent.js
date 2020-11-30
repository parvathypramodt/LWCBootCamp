import { track, api, LightningElement } from 'lwc';

export default class grandParent extends LightningElement {

    @track countSelectedChild=0;
    handleResetAll(){
        this.template.querySelector("c-data-Parent").resetAll();
        this.countSelectedChild=0;
    }
    handleCountSelectedChild(event){
       if(event.detail.selAll==='Deselect'){
            this.countSelectedChild +=1 ;
       }
       else{
            this.countSelectedChild -=1 ;
       }
    }
}