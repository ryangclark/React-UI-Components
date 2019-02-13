import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButtonContainer from './components/ButtonComponents/NumberButtonContainer';

const App = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay />
      <NumberButtonContainer />
      <ActionButton id="clear" buttonValue="clear" />
      <ActionButton id="add" buttonValue="+" />
      <ActionButton id="divide" buttonValue="÷" />
      <ActionButton id="equal" buttonValue="=" />
      <ActionButton id="multiply" buttonValue="×" />
      <ActionButton id="subtract" buttonValue="–" />
    </div>
  );
};

export default App;
