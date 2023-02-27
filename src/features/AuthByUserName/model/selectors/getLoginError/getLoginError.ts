import {createSelector} from "@reduxjs/toolkit";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";

export const getLoginError = createSelector(getLoginState, (state) =>
    state.error || ''
);