import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        dispatch(counterActions.incremented());
    };

    const dec = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <div>
            <h1 data-testid="counter-title">
                value =
                {counterValue}
            </h1>
            <Button data-testid="counter-inc-btn" onClick={inc}>Inc</Button>
            <Button data-testid="counter-dec-btn" onClick={dec}>Dec</Button>
        </div>
    );
};
