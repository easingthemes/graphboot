import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from "redux-thunk";

import pathwaysPageReducer from '../containers/Pathways/reducer';
import globalReducer from '../containers/App/reducer';

const initialState = fromJS({});

const rootReducer = combineReducers({
  pathwaysPage: pathwaysPageReducer,
  global: globalReducer
});

export default function configureStore() {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
}
