import axios from "axios";
// Constante pour définir les actions 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER = "UPDATE_USER";

// Action succés de connexion 
export const LoginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token },
});

// stockage de l'erreur + login fail

export const LoginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: { error },
});
// Gére l'action de logout
export const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    return {
        type: LOGOUT,
    };
};
// requête récupération du profil utilisateur 

export const fetchUser = (token) => {
    return async (dispatch) => {
        if (!token) {
            return
        }
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/user/profile",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                const userProfile = response.data.body;
                dispatch({
                    type: USER_PROFILE,
                    payload: userProfile,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateUser = (userName, token) => {
    return async (dispatch) => {
        console.log('Updating user:', userName, 'with token:', token);

        if (!token) {
            return;
        }

        try {
            const response = await axios.put(
                "http://localhost:3001/api/v1/user/profile",
                { userName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                dispatch({
                    type: UPDATE_USER,
                    payload: { userName, token },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
};
