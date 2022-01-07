import React, { useState } from 'react';


//main app 
const HooksContainer1 = () => {

    const [ stateValue, setValue ] = useState(0);

    const incrementValue = () => {
        setValue(stateValue + 1);
    }

    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    return(
        <div>
        React Hooks
        <br />

        <button onClick={() => incrementValue()}>Increase local state</button>
        <button onClick={() => decrementValue()}>Decrease local state</button>

        <br />

        <div>
            <p>Local State: {stateValue}</p>
        </div>

        </div>
    )
}


export default HooksContainer1;
