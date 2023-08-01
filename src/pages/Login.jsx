
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "../styles/login.css"

const Login = ({ setUserToken }) => {
    const [email, setEmail] = useState("");
    const [pasword, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!email || !password) {
            setErrorMessage("Veuillez renseigner tous les champs");
        } else {

            try {
                const { data } = await axios.post(
                    "https://lereacteur-vinted-api.herokuapp.com/user/login",
                    {
                        email: email,
                        pasword: pasword,
                    }
                );
                 
                console.log(data.token);

                Cookies.set("token", data.token);

                setUserToken(data.token);
                navigate("/");

            } catch (error) {
                console.log("c'est le token", error);
            }
        }
    };

    return (
        <main>
            <div className="container">

                <div className="loguer">
                    
            
                <h1>Se connecter</h1>
               
                <form onSubmit={handleSubmit}>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adresse email"
                    value={email}
                    onChange={(event)=>{
                        setErrorMessage("");
                        setEmail(event.target.value);
                        }}
                    />

                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(event)=>{
                        setErrorMessage("");
                        setPassword(event.target.value);
                        }}
                    />

                     <button>Se Connecter</button>   

                     {errorMessage &&  <p>{errorMessage}</p>}
                </form>
                </div>
            </div>            
        </main>
    );
};

export default Login;