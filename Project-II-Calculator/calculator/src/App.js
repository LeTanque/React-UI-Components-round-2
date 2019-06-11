import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const styles = { 
  "white":"white-number button-number",
  "red":"red-number button-number",
  "whiteZero":"white-zero button-number"
}

const App = () => {
  return (
    <section className="calculator">
      <div className="number-display">
        <CalculatorDisplay value="0" />

      </div>
      <div className="row-numpad">
        <NumberButton value="7" style={styles.white} />
        <NumberButton value="8" style={styles.white} />
        <NumberButton value="9" style={styles.white} />
        <NumberButton value="X" style={styles.red} />
      </div>
      <div className="row-numpad">
        <NumberButton value="4" style={styles.white} />
        <NumberButton value="5" style={styles.white} />
        <NumberButton value="6" style={styles.white} />
        <NumberButton value="-" style={styles.red} />
      </div>
      <div className="row-numpad">
        <NumberButton value="1" style={styles.white} />
        <NumberButton value="2" style={styles.white} />
        <NumberButton value="3" style={styles.white} />
        <NumberButton value="+" style={styles.red} />
      </div>
      <div className="row-numpad">
        <NumberButton value="0" style={styles.whiteZero} />
        <NumberButton value="=" style={styles.red} />
      </div>
    </section>
  );
};


export default App;

