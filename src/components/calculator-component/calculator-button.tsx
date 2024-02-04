import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calculator-button',
  styleUrl: 'calculator-button.css',
  shadow: true,
})
export class CalculatorButton {
  @Prop() label: string = '';
  @Prop() handleClick: () => void;
  @Prop() widthAuto: boolean;

  render() {
    return (
      <button onClick={this.handleClick} class={this.widthAuto ? 'width-auto' : ''}>
        {this.label}
      </button>
    );
  }
}
