import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export type { StateSchema, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider, createReduxStore, AppDispatch,
};
