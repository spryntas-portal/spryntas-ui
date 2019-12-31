import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from "redux-form";
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();


const rootReducer = combineReducers({
    form: formReducer,
  });

  export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
