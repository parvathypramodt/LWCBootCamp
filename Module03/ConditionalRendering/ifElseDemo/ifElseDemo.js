import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';

export default class ConditionalRenderingExample extends LightningElement {
    showTom = true;
    imageoftom = My_Resource + '/images/tom.jpg';
    imageofjerry = My_Resource + '/images/jerry.jpg';
    switchImage() {
        this.showTom = !this.showTom;
    }
}