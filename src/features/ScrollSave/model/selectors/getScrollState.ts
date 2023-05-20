import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUserName';
import { ScrollSchema } from 'features/ScrollSave';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollState = (state: StateSchema) => state.scroll.scroll;
export const getScrollByPath = createSelector(
    getScrollState,
    (state: StateSchema, path: string) => path,
    (scrollState, path) => scrollState[path] || 0,
);
