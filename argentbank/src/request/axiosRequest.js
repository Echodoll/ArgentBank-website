import axios from "axios";

export const login = async (email, password, remember) => {
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
            if (remember) {
                localStorage.setItem("token", token);
            } else {
                sessionStorage.setItem("token", token);
            }
            console.log("Authentification réussie");
            return true;
        } else {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            console.log('Échec d\'authentification');
            return false;
        }
    } catch (error) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        console.error('Erreur lors de l\'authentification', error);
        return false;
    }
};
