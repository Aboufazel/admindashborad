const Storage = () => {

    return {
        setLogin: (userId, accessToken , kind) => {
            const data = {
                userId,
                accessToken,
                kind,
            };
            localStorage.setItem("auth", JSON.stringify(data));
        },
        setLogout: () => {
            const data = {
                userId: "",
                accessToken: "",
            };
            localStorage.setItem("auth", JSON.stringify(data));
        },
        get  userId() {
            const key = localStorage.getItem("auth");
            if (key == null) {
                return false;
            }
            const auth= JSON.parse(key);
            return auth. userId;
        },
        get accessToken() {
            const key = localStorage.getItem("auth");
            if (key == null) {
                return false;
            }
            const auth = JSON.parse(key);
            return auth.accessToken;
        },
        get kind() {
            const key = localStorage.getItem("auth");
            if (key == null) {
                return false;
            }
            const auth = JSON.parse(key);
            return auth.kind;
        },

        setAccessToken: (accessToken) => {
            const key = localStorage.getItem("auth");
            const auth = JSON.parse(key);
            auth.accessToken = accessToken;
            localStorage.setItem("auth", JSON.stringify(auth));
        },
    }


}


export default Storage;