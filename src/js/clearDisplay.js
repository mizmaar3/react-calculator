import { OperationTypes } from '../js/constants.js';

/**
* Set state to clear display
* if C pressed only clear current currValue
* if AC or OFF pressed clear everything
*
* @param {String} op (operation name)
* @return {object} new state
**/

export default function (operationName) {
  return operationName === OperationTypes.CLEAR ? {
    currValue: '0'
  } : {
    prevValue: '',
    currValue: operationName === OperationTypes.OFF ? '' : '0',
    operation: null,
    clearValue: false
  };
}
