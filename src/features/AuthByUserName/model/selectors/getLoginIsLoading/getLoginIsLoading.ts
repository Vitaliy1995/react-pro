import {createSelector} from "@reduxjs/toolkit";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";

export const getLoginIsLoading = createSelector(getLoginState, (state) => state.isLoading || true)