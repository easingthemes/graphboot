import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from "redux-thunk";

import toolTipReducer from '../containers/Tooltip/reducer';
import calendarReducer from '../containers/Calendar/reducer';
import counterReducer from '../containers/Palette/reducer';

const initialState = fromJS({});

const rootReducer = combineReducers({
  tooltip: toolTipReducer,
  calendar: calendarReducer,
  counter: counterReducer
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
