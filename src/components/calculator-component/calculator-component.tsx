import { Component,h } from "@stencil/core";

@Component({
	tag:'calculator-component',
  styleUrl: 'calculator-component.css',
  shadow: true,
})
export class CalculatorComponent {
	render (){
		return(			
		<div class= "b-calculator-box">
			<h1>CALCULATOR</h1>
		</div>	
		)
	}
}
