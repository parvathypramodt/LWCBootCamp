import { LightningElement, api } from 'lwc';

export default class dataChild extends LightningElement {
    @api selectButton = 'Select';
    @api btnType = 'success';
    @api num = 'Child One'

@api childReset(){
    this.selectButton = "Select";
    this.btnType = "success";
}
handleOnClick(){
    alert( 'child - before - selectButton:'+this.selectButton);
    if(this.selectButton === 'Select'){
        alert('if in child'+ this.selectButton);
        this.selectButton = 'Deselect';
        this.btnType='destructive';
    }else{
        alert('else in child'+ this.selectButton);
        this.selectButton='Select';
        this.btnType='success';
    }
    const childevent = new CustomEvent('customclick',
        {
            bubbles : true,
            composed : true,
            detail: {selAll:this.selectButton}
        
        });

        this.dispatchEvent(childevent);
}
}