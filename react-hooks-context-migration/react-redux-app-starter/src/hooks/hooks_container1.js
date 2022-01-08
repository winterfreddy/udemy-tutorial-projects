import React, { useState, useEffect } from 'react';


//main app 
const HooksContainer1 = () => {

    const [ stateValue, setValue ] = useState(0);
    const [ useEffectValue, setUseEffectValue ] = useState(null);

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000);
    }, [stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1);
    }

    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    const changeEffect = () => {
        setUseEffectValue("some string");
    }

    return(
        <div>
        React Hooks
        <br />

        <button onClick={() => incrementValue()}>Increase local state</button>
        <button onClick={() => decrementValue()}>Decrease local state</button>
        <button onClick={() => changeEffect()}>Change Effect Value</button>

        <br />

        <div>
            <br />
            { useEffectValue ? <p>{useEffectValue}</p> : <p>No value</p>}
            <br />
            <p>Local State: {stateValue}</p>
        </div>

        </div>
    )
}


export default HooksContainer1;
