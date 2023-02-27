import {createSelector} from "@reduxjs/toolkit";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";

export const getLoginUsername = createSelector(getLoginState, (state) => state.username || '')