import React from 'react'

const CalculatorDisplay = (props) => {
    return (
        <>
            <div className={props.style}>{props.value}</div>
        </>
    );
}

export default CalculatorDisplay
