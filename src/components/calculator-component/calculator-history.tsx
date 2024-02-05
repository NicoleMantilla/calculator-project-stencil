import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calculator-history',
  styleUrl: 'calculator-history.css',
  shadow: true,
})
export class CalculatorHistory {
  @Prop() entries: string[] = [];

  render() {
    return (
      <div>
        <h2>History</h2>
        <ul>
          {this.entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
}
