import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

export const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware(logger, thunk)));