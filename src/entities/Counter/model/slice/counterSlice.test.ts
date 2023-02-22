import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice', () => {
    test('decremented', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decremented()))
            .toEqual({ value: 9 });
    });

    test('incremented', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.incremented()))
            .toEqual({ value: 11 });
    });

    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.incremented()))
            .toEqual({ value: 1 });
    });
});
