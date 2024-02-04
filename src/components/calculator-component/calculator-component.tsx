import { Component,h } from "@stencil/core";
@Component({
  tag:'calculator-component',
  styleUrl: 'calculator-component.css',
  shadow: true,
})
export class CalculatorComponent {


	render() {
	  return (
		<div class="b-calculator-body">
		  <div class= "calculator-container">
			<div class="calculator-result-preview">
			  <div id="operation">12*4</div>
			 <div id= "operation-result">48</div>
			</div>
		  </div>
  
		</div>
	  );
	}
  }