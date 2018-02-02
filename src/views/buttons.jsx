import React from 'react';
import { OperationTypes } from '../js/constants.js';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    let calcButtons = document.getElementsByTagName('td');
    Array.from(calcButtons).forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.onClick(e)
      });
    });
  }

  onClick (event) {
    let value = event.target.innerHTML;
    let type = 'compute';
    if (!isNaN(value)) {
      type = 'display';
    } else {
      value = event.target.getAttribute('data-op');
    }

    if (this.props.onClick) {
      this.props.onClick.call(this, {
        value, type
      }, this.props);
    }
  }

  render() {
    return (
      <div>
        <table className='calculatorButtons'>
          <tbody>
            <tr>
              <td colSpan="3" className="noButton modelName">SL-300SV</td>

              <td data-op={OperationTypes.SQUARE_ROOT}>&#8730;</td>
              <td data-op={OperationTypes.OFF}>Off</td>
            </tr>
            <tr>
              <td data-op={OperationTypes.MEMORY_CLEAR}>MC</td>
              <td data-op={OperationTypes.MEMORY_RECAL}>MR</td>
              <td data-op={OperationTypes.MEMORY_REMOVE}>M-</td>
              <td data-op={OperationTypes.MEMORY_ADD}>M+</td>
              <td data-op={OperationTypes.DIVIDE}>/</td>
            </tr>
            <tr>
              <td data-op={OperationTypes.MODULO}>%</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td data-op={OperationTypes.MULTIPLY}>x</td>
            </tr>
            <tr>
              <td data-op={OperationTypes.PLUS_MINUS}>&#177;</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td data-op={OperationTypes.MINUS}>-</td>
            </tr>
            <tr>
              <td data-op={OperationTypes.CLEAR}>C</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td rowSpan="2" data-op={OperationTypes.PLUS}>+</td>
            </tr>
            <tr>
              <td data-op={OperationTypes.ALL_CLEAR}>AC</td>
              <td>0</td>
              <td data-op={OperationTypes.DECIMAL_POINT}>&#8729;</td>
              <td data-op={OperationTypes.EQUAL}>=</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
