import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GithubCallback = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const code =
            new URLSearchParams(window.location.search).get("code");

        if (code) {

            axios.get(
                `http://localhost:8080/auth/github/callback?code=${code}`
            )
                .then((res) => {

                    localStorage.setItem(
                        "token",
                        res.data.access_token
                    );

                    navigate("/dashboard");
                })
                .catch((err) => {
                    console.log(err);
                    alert("Login failed");
                });
        }

    }, []);

    return <h2>Logging in...</h2>;
};

export default GithubCallback;