import axios from "axios";

export const loginUser = async (email, password, rememberMe) => {
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
        } else {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
        }

        if (response.status === 401) {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
        }
    } catch (error) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
    }
};