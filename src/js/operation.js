import {
  OperationTypes, OperationSymbol
} from '../js/constants.js';
import calculation from './calculation.js';
import memoryFunction from './memoryFunction.js';
import clearDisplay from './clearDisplay.js';

const CLEAR_STATE_OP = [OperationTypes.OFF, OperationTypes.ALL_CLEAR, OperationTypes.CLEAR];

/**
* Function responsible to return state to be set
* It perform calculator operation based on input
*
* @param {Object} data
* @param {Object} state
* @return {object} new state
**/

let Operation = (data, state) => {

  if (CLEAR_STATE_OP.indexOf(data.value) > -1) {
    return clearDisplay(data.value);
  }

  if (data.value === OperationTypes.PLUS_MINUS) {
    return {
      currValue: state.currValue * (-1)
    }
  }

  if (data.value.indexOf('memory') > -1) {
    return memoryFunction(data.value, state);
  }

  if (data.value === OperationTypes.DECIMAL_POINT && !state.clearValue ) {
    return {
      currValue: state.currValue.indexOf('.') < 0 ? state.currValue ? String(state.currValue) + '.' : '0.' : state.currValue
    }
  }

  let newCalculatedValue;
  if (!isNaN(data.value)) {
    if (state.clearValue) {
      state.prevValue = state.currValue ? state.currValue : state.prevValue;
      state.currValue = data.value;
      state.clearValue = false;
    } else {
      state.currValue = Number(state.currValue) ? String(state.currValue) + data.value : data.value;
    }
  } else {
    if (state.prevValue && state.currValue) {
      newCalculatedValue = calculation(state.operation, state.prevValue, state.currValue);
      state.prevValue = data.value === OperationTypes.EQUAL ? '' : (state.currValue ? state.currValue : state.prevValue);
      state.currValue = newCalculatedValue;
      state.operation = data.value === OperationTypes.EQUAL ? state.operation : data.value;
      state.clearValue = true;
    } else {
      state.operation = data.value;
      state.clearValue = true;
      state.prevValue = state.currValue ? state.currValue : state.prevValue;
    }
  }

  return state;

};

export default Operation;
