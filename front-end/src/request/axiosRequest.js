import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";
export const loginUser = async (email, password, rememberMe, navigate) => {

    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/user/login",
                {
                    email: email,
                    password: password,
                }
            );

            if (response.status === 200) {
                const token = response.data.body.token;
                if (rememberMe) {
                    localStorage.setItem("token", token);
                } else {
                    sessionStorage.setItem("token", token);
                }
                navigate("/user");
                dispatch(userLoginSuccess());
            } else {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
            }

            if (response.status === 401) {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                navigate("/signIn");
            }
        } catch (error) {
            dispatch(userLoginFailure("identifiants incorrects"));
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
        }
    };
};

export const userLoginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

// échec de connexion de l'utilisateur
export const userLoginFailure = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
});

// déconnecter l'utilisateur
export const logoutUser = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    return {
        type: LOGOUT_USER,
    };
};
