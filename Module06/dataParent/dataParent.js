import { LightningElement, api} from 'lwc';

export default class dataParent extends LightningElement {
    @api childOneSelected='Child One: Deselected';
    @api childTwoSelected='Child Two: Deselected';
    @api childThreeSelected='Child Three: Deselected';
    reset=false;

    @api resetAll(){
        this.childOneSelected='Deselected';
        this.childTwoSelected='Deselected';
        this.childThreeSelected='Deselected';
        this.template.querySelector("c-data-Child").resetChild();
    }

    handleChild1Click(event){
        if(event.detail.selAll ==='Deselect'){
            this.childOneSelected='Child One: Selected';
        }else{
            this.childOneSelected='Deselected';
        }
     }
     handleChild2Click(event){
        if(event.detail.selAll ==='Deselect'){
            this.childTwoSelected='Child Two: Selected';
        }else{
            this.childTwoSelected='Deselected';
        }  
     }
     handleChild3Click(event){
        if(event.detail.selAll ==='Deselect'){
            this.childThreeSelected='Child Three: Selected';
        }else{
            this.childThreeSelected='Deselected';
        } 
     }
}