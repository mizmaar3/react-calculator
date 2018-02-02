import { OperationTypes } from '../js/constants.js';

/**
* Calculation function
* It perform calculator operation based on input
*
* @param {String} operationName
* @param {a} prevValue
* @param {b} currValue
* @return {Number} Calculated answer
**/

export default function (operationName, a, b) {

  a = Number(a);
  b = Number(b);

  switch(operationName) {

    case OperationTypes.PLUS:
      return a + b
      break;

    case OperationTypes.MINUS:
      return a - b
      break;

    case OperationTypes.DIVIDE:
      return a / b
      break;

    case OperationTypes.MULTIPLY:
      return a * b
      break;

    case OperationTypes.MODULO:
      return a % b
      break;

    case OperationTypes.SQUARE_ROOT:
      return Math.sqrt(b)
      break;

    case OperationTypes.EQUAL:
      return b
      break;

    default:
      return 'ERROR'
  }

}
