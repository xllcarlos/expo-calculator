import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { useState } from 'react';
import Display from './components/Display';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

// Initial state
type InitialState = {
  displayValue: string,
  clearDisplay: boolean,
  operation: string | null,
  values: number[],
  current: number
}

const initialState: InitialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default function App() {
  const [state, setState] = useState<InitialState>({ ...initialState });

  const addDigit = (value: string): void => {
    let newState: InitialState = state;

    // To clear zero initial number after press a number
    const clearDisplay = newState.displayValue === '0'
      || newState.clearDisplay;

    // To not insert more dots than one
    if (value === '.' && !clearDisplay && newState.displayValue.includes('.')) {
      return;
    }

    // To sum and set values
    const currentValue = clearDisplay ? '' : newState.displayValue;
    const displayValue = currentValue + value;
    newState = { ...newState, displayValue, clearDisplay: false };

    // To set the result values
    if (value !== '.') {
      const newValue = parseFloat(newState.displayValue);
      const values = [...newState.values];
      values[newState.current] = newValue;
      newState = { ...newState, values: values };
    }

    // To set the final state
    setState(newState);
  }

  const clearMemory = (): void => {
    // Reset the calculator
    setState({ ...initialState });
  }

  const setOperation = (operation: string): void => {
    let newState = { ...state };

    // To set values array position
    if (newState.current === 0) {
      newState = {
        ...newState,
        operation,
        current: 1,
        clearDisplay: true
      };
    } else {
      const equals = operation === '=';
      const values = [...newState.values];

      // Do the calculation
      try {
        values[0] = eval(`${values[0]} ${newState.operation} ${values[1]}`);
      } catch (error) {
        values[0] = newState.values[0];
        console.log(error);
      }

      // To set logic state values
      values[1] = 0;
      newState = {
        ...newState,
        displayValue: values[0].toString(),
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      };
    }

    // To set the final state
    setState(newState);
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={() => clearMemory()} />
        <Button label='/' operation onClick={() => setOperation('/')} />

        <Button label='7' onClick={() => addDigit('7')} />
        <Button label='8' onClick={() => addDigit('8')} />
        <Button label='9' onClick={() => addDigit('9')} />
        <Button label='*' operation onClick={() => setOperation('*')} />

        <Button label='4' onClick={() => addDigit('4')} />
        <Button label='5' onClick={() => addDigit('5')} />
        <Button label='6' onClick={() => addDigit('6')} />
        <Button label='-' operation onClick={() => setOperation('-')} />

        <Button label='1' onClick={() => addDigit('1')} />
        <Button label='2' onClick={() => addDigit('2')} />
        <Button label='3' onClick={() => addDigit('3')} />
        <Button label='+' operation onClick={() => setOperation('+')} />

        <Button label='0' double onClick={() => addDigit('0')} />
        <Button label='.' onClick={() => addDigit('.')} />
        <Button label='=' operation onClick={() => setOperation('=')} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}