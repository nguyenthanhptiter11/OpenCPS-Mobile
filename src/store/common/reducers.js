import { RESTART_STATE, SET_INTRO_STATE, SET_LOGIN_STATE, SET_EXPIRED_SESSION } from './types';
import { createStore } from 'redux';
import { Alert } from 'react-native';
import AsyncStorageUtils from '../../modules/utils/AsyncStorageUtils'

// initial state
const INITIAL_STATE = {
  isIntro: false,
	isLogin: false,
	expiredSession: null,
	tokenSession: null
};

function applyRestartAll(state) {

  const result = {
		...state,
		isIntro: false,
    isLogin: false,
    expiredSession: null,
    tokenSession: null
	};
  AsyncStorageUtils.updateAsynStorageByKey(result);
	return result;
}

function applyIsIntro(state, action) {

  const result = {
		...state,
    ...action.payload,
		isIntro: action.payload.isIntro
	};
  AsyncStorageUtils.updateAsynStorageByKey(result);
	return result;
}

function applyIsLogin(state, action) {
	return {
		...state,
		isLogin: action.payload.isLogin,
    expiredSession: action.payload.expiredSession,
    tokenSession: action.payload.tokenSession
	};
}

// Reducer Function

function reducer(state = INITIAL_STATE, action) {

	switch (action.type) {
    case RESTART_STATE:
      return applyRestartAll(state)
		case SET_INTRO_STATE:
			// handle the action here using helper functions
			return applyIsIntro(state, action);
		case SET_LOGIN_STATE:
			// handle the action here using helper functions
			return applyIsLogin(state);
		case SET_EXPIRED_SESSION:
			// handle the action here using helper functions
			return applyIsLogin(state, action);
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;