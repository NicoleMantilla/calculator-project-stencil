import { Component, Prop, State, h } from '@stencil/core';

const deleteLabel = 'DELETE';
const equalLabel = '=';
const resetLabel = 'C';

const faultyOperation = 'faultyOperation';

@Component({
  tag: 'calculator-component',
  styleUrl: 'calculator-component.css',
  shadow: true,
})
export class CalculatorComponent {
  @Prop() calculatorButtons: string[] = [];
  @State() currentOperation: string = '';
  @State() operationResult: string = '';
  @State() history: string[] = [];

  private defaultCalculatorButtons = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', equalLabel, '+', deleteLabel, resetLabel];

  render() {
    const buttons = this.calculatorButtons.length > 0 ? this.calculatorButtons : this.defaultCalculatorButtons;
    console.log('high level', this.history);
    return (
      <div class="b-calculator-body flex-center">
        <div class="calculator-container">
          <div class="calculator-result-preview">
            <div class="operation">{this.currentOperation}</div>
            <div class="operation-result">{this.operationResult}</div>
            <div class="calculator-buttons">
              {buttons.map(button => (
                <calculator-button label={button} handleClick={() => this.handleButtonClick(button)} widthAuto={button === deleteLabel ? true : false} />
              ))}
            </div>
          </div>
        </div>
        <calculator-history entries={this.history} />
      </div>
    );
  }

  handleButtonClick(button: string) {
    switch (button) {
      case equalLabel:
        this.calculateResult();
        break;
      case deleteLabel:
        this.deleteLastCharacter();
        break;
      case resetLabel:
        this.resetOperation();
        break;
      default:
        this.addToOperation(button);
        break;
    }
  }

  calculateResult() {
    try {
      const result = new Function('return ' + this.currentOperation)();
      const entry = `${this.currentOperation} = ${result}`;
      this.history = [...this.history, entry];
      this.currentOperation = '';
      this.operationResult = result.toString();
    } catch (error) {
      this.currentOperation = faultyOperation;
      this.operationResult = '';
      this.addToHistory();
    }
  }

  deleteLastCharacter() {
    this.currentOperation = this.currentOperation.slice(0, -1);
    this.operationResult = '';
  }

  resetOperation() {
    this.currentOperation = '';
    this.operationResult = '';
  }

  addToOperation(button: string) {
    this.currentOperation += button;
    this.operationResult = '';
  }

  addToHistory() {
    if (this.currentOperation !== faultyOperation) {
      const entry = `${this.currentOperation} = ${this.operationResult}`;
      this.history = [...this.history, entry];
    }
    this.resetOperation();
  }
}
