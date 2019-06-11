import React from 'react';


const NumberButton = (props) => {
    console.log(props)
    return (
        <>
            <div className={props.style}>
                {props.value}
            </div>
        </>
    );
};

export default NumberButton;
