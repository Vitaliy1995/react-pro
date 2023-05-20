export type { ScrollSchema } from './model/types/ScrollSchema';

export { getScrollState, getScrollByPath } from './model/selectors/getScrollState';
export { scrollActions, scrollReducer } from './model/slice/scrollSlice';
