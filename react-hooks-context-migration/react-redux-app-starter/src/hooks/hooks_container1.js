import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';

//main app 
const HooksContainer1 = () => {

    const [ stateValue, setValue ] = useState(0);
    const [ useEffectValue, setUseEffectValue ] = useState(null);

    const [ state, dispatch ] = useReducer(Reducer.HooksReducer, Reducer.initialState);

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

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success());
    }
    
    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure());
    }

    return(
        <div>
        React Hooks
        <br />

        <button onClick={() => incrementValue()}>Increase local state</button>
        <button onClick={() => decrementValue()}>Decrease local state</button>
        <button onClick={() => changeEffect()}>Change Effect Value</button>
        <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
        <button onClick={() => handleDispatchFalse()}>Dispatch False</button>

        <br />

        <div>
            <br />
            { useEffectValue ? <p>{useEffectValue}</p> : <p>No value</p>}
            <br />
            { state.stateprop1 ? <p>State prop 1 is true</p> : <p>State prop 1 is false</p>}
            <br />
            <p>Local State: {stateValue}</p>
        </div>

        </div>
    )
}


export default HooksContainer1;
