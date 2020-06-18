import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let CounterValue = useContext(CounterContext);

    return (
        <div>
            <h2>This is the First child using Counter Context</h2>
            <h3>Value of Counter Context is: {CounterValue[0]}</h3>

            <button onClick={()=>{CounterValue[1](++CounterValue[0])}}>
                    Increment Context</button>
        </div>
    );
}

export default Child;