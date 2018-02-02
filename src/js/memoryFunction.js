import { OperationTypes } from '../js/constants.js';

/**
* This Function is responsible to setup memory
* Memory will be saved in localStorage
* Only last 5 values will be saved
*
*
* @param {Object} data
* @param {Object} state
* @return {object} new state
**/

export default function (operationName, state) {

  let memory = localStorage.getItem('memory');
  memory = memory ? memory.split(',') : [];

  if (operationName === OperationTypes.MEMORY_CLEAR) {
    localStorage.removeItem('memory');
    return state
  }

  if (operationName === OperationTypes.MEMORY_RECAL) {
    // TODO 
    // make currValue to next memory index on each MR press
    return {currValue: memory[0]}
  }

  if (operationName === OperationTypes.MEMORY_REMOVE && state.currValue) {
    let indexToRemove = memory.indexOf(state.currValue);
    if (indexToRemove > -1) {
      memory.splice(indexToRemove, 1);
      localStorage.setItem('memory', memory);
    }
    return {clearValue: true}
  }

  if (operationName === OperationTypes.MEMORY_ADD && state.currValue) {
    if (memory.length < 5) {
      memory.push(state.currValue);
    } else {
      memory = [state.currValue, [...memory.slice(0, memory.length-1)]];
    }
    localStorage.setItem('memory', memory);
  }

  return state

}
