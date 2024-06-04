import React, {useReducer, useState} from 'react';
import {Text} from 'react-native';
import Button from './components/Button';
import CalculationDisplay from './components/CalculationDisplay';
import MainLayout from './components/MainLayout';

import * as math from 'mathjs';

const initialState = {
  calculate: '',
  result: '0',
  previousNumber: null,
};
const operations = {
  add: math.add,
  subtract: math.subtract,
  multiply: math.multiply,
  divide: math.divide,
  overwrite: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'digit':
      if (state.overwrite) {
        return {
          ...state,
          result: String(action.payload),
          overwrite: false,
        };
      }
      return {
        ...state,
        result:
          state.result === '0'
            ? String(action.payload)
            : state.result + action.payload,
      };
    case 'clear':
      return {...initialState};

    case 'calculate':
      try {
        if (state.calculate && state.previousNumber !== null) {
          const operationFunction = operations[state.calculate];
          if (operationFunction) {
            const result = operationFunction(
              parseFloat(state.previousNumber),
              parseFloat(state.result),
            );
            return {
              ...state,
              result: String(result),
              calculate: '',
              previousNumber: null,
            };
          } else {
            console.error('Invalid operation:', state.calculate);
          }
        }
        return state;
      } catch (error) {
        console.error('Error during calculation:', error);
        return {...state};
      }
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      if (state.previousNumber !== null) {
        const operationFunction = operations[state.calculate];
        if (operationFunction) {
          const result = operationFunction(
            parseFloat(state.previousNumber),
            parseFloat(state.result),
          );
          return {
            ...state,
            previousNumber: String(result),
            calculate: action.type,
            overwrite: true,
          };
        }
      }
      return {
        ...state,
        calculate: action.type,
        previousNumber: state.result,
        overwrite: true,
      };
    case 'percentage':
      if (state.previousNumber !== null) {
        const percentage =
          parseFloat(state.result) * (parseFloat(state.previousNumber) / 100);
        return {
          ...state,
          result: String(percentage),
        };
      }
      return state;
    case 'toggleSign':
      return {
        ...state,
        result: String(-parseFloat(state.result)),
      };
    case 'dot':
      if (!state.result.includes('.')) {
        return {...state, result: state.result.toString() + '.'};
      }
      return state;
    // return {...state, result: state.result + '.'};
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {result} = state;

  const [activeButton, setActiveButton] = useState(null);

  console.log('state', state, initialState);

  const handlePress = (action, value) => {
    switch (action) {
      case 'clear':
        dispatch({type: 'clear'});
        break;
      case 'calculate':
        dispatch({type: 'calculate'});
        break;

      default:
        dispatch({type: action, payload: value});
        break;
    }
    //   dispatch({type: action, payload: value});
  };

  const buttons = [
    {
      text: 'C',
      value: null,
      action: 'clear',
      theme: 'secondary',
    },
    {
      text: '+-',
      value: null,
      action: 'toggleSign',
      size: 'sm',
      theme: 'secondary',
    },
    {
      text: '%',
      value: null,
      action: 'percentage',
      size: 'sm',
      theme: 'secondary',
    },
    {
      text: '/',
      value: null,
      action: 'divide',
      size: 'sm',
      theme: 'secondary',
      //
    },
    {
      text: '7',
      value: 7,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '8',
      value: 8,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '9',
      value: 9,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: 'X',
      value: null,
      action: 'multiply',
      size: 'sm',
      theme: 'secondary',
    },
    {
      text: '4',
      value: 4,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '5',
      value: 5,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '6',
      value: 6,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '-',
      value: null,
      action: 'subtract',
      size: 'sm',
      theme: 'secondary',
    },

    {
      text: '1',
      value: 1,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '2',
      value: 2,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '3',
      value: 3,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },

    {
      text: '+',
      value: null,
      action: 'add',
      size: 'sm',
      theme: 'secondary',
    },
    {
      text: '0',
      value: 0,
      action: 'digit',
      style: {},
      size: 'sm',
      theme: 'primary',
      isRounded: true,
    },
    {
      text: '.',
      value: '.',
      action: 'dot',
      size: 'sm',
      theme: 'secondary',
      isRounded: true,
    },
    {
      text: '=',
      value: null,
      action: 'calculate',
      isLarge: true,
      theme: 'secondary',
      isRounded: true,
    },
  ];

  return (
    <MainLayout topScreen={<CalculationDisplay result={result} />}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          onPress={() => handlePress(button.action, button.value)}
          size={button.size}
          theme={button.theme}
          isRounded={button.isRounded}
          style={button.style}
          isLarge={button.isLarge}
          isActive={activeButton === button.action}>
          <Text>{button.text}</Text>
        </Button>
      ))}
    </MainLayout>
  );
};

export default Calculator;
