import { LightningElement,track } from 'lwc';

export default class CalcDemo extends LightningElement {
		
		@track result='';
		@track partialresult='';
		
		handleNumers(event){
            let textValue=event.target.label;
			this.result=this.result+textValue;
			try {
    			this.partialresult=eval(this.result);
			}catch(e) {
   				if (e instanceof SyntaxError) {
        			this.partialresult="Invalid Expression";
    			}
			}				
		}		
		handleCalc(event){
            let textValue=event.target.title;
            this.result=this.result+textValue;
		}
		handleResult(event){
			try {
    			this.result=eval(this.result);
			}catch(e) {
   				if (e instanceof SyntaxError) {
        			this.result="Invalid Expression";
    			}
			}			
		}
		clearResult(event){
            this.result='';
			this.partialresult='';
						
		}

		
}