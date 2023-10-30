import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, USER_PROFILE, UPDATE_USER_NAME } from '../request/axiosRequest';

const initialState = {
    loginError: null,
    userProfile: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loginError: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                loginError: null,
                userProfile: '',
            };
        case USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };
        case UPDATE_USER_NAME:
            const newProfile = { ...state.userProfile, userName: action.payload };
            return {
                ...state,
                userProfile: newProfile,
            };
        default:
            return state;
    }
};

export default userReducer;