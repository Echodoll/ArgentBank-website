import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_PROFILE, UPDATE_USER } from '../actions/user.action';

const initialState = {
    loginError: null,
    userProfile: '',
    token: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loginError: null
            };

        case LOGIN_FAIL:
            return {
                ...state,
                token: null,
                loginError: action.payload.error,

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
            const { userName, token } = action.payload;
            const newProfile = { ...state.userProfile, userName }; return {
                ...state,
                userProfile: newProfile,
                token,
            };

        default:
            return state;
    }
};

export default userReducer;
