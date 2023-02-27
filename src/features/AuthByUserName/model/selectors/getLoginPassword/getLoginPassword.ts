import {createSelector} from "@reduxjs/toolkit";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";

export const getLoginPassword = createSelector(getLoginState, (state) => state.password || '')