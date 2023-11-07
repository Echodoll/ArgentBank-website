import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_PROFILE, UPDATE_USER } from '../actions/user.action';

const initialState = {
    loginError: null,
    userProfile: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null
            };

        case LOGIN_FAIL:
            return {
                ...state,
                loginError: action.payload
            };

        case LOGOUT:
            return {
                loginError: null,
                userProfile: '',
            }
        case USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };

        case UPDATE_USER:
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
