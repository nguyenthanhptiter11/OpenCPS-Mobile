import { RESTART_STATE, SET_INTRO_STATE, SET_LOGIN_STATE, SET_EXPIRED_SESSION } from './types';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

function restartState(payload) {
	return {
		type: RESTART_STATE,
    payload: payload
	};
}

function setIntroState(payload) {
	return {
		type: SET_INTRO_STATE,
    payload: payload
	};
}

function setLoginState(payload) {
	return {
		type: SET_LOGIN_STATE,
    payload: payload
	};
}

const actionCreators = {
	restartState,
	setIntroState,
	setLoginState
};

function mapDispatchToProps(dispatch) {
	return {
    restartState: bindActionCreators(actionCreators.restartState, dispatch),
    setIntroState: bindActionCreators(actionCreators.setIntroState, dispatch),
    setLoginState: bindActionCreators(actionCreators.setLoginState, dispatch)
  };
}

export default mapDispatchToProps;
