import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "../styles/signup.css"

const Signup = ({setUserToken}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!email || !username || !password) {
            setErrorMessage("Il faut renseigner tous les champs");
        } else {
            try{
                const { data } = await axios.post (
                    "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                    {
                        email,
                        username,
                        password,
                        newsletter,
                    }
                );
                    // on créé le cookie
                    Cookies.set("token", data.token);

                    setUserToken(data.token);

                    // on va vers l'accueil
                    navigate("/");
            } catch (error) {
                setErrorMessage("Une erreur est arrivée");
            }
        }
    };

    return (
        <main>
            <div className="container">


            <div className="signer">

            {/* <div>
                    <h1>S'inscrire</h1>
            </div> */}
                <h1>S'inscrire</h1>


            <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={(event)=>{
                            setErrorMessage("");
                            setUsername(event.target.value);
                        }} />

                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event)=>{
                            setErrorMessage("");
                            setEmail(event.target.value);
                        }} />

                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(event)=>{
                            setErrorMessage("");
                            setPassword(event.target.value);
                        }} />
                <div className="news">
                <input 
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                        checked={newsletter}
                        onChange={(event)=>{
                            setNewsletter(!newsletter);
                        }} />
                     <label htmlFor="newsletter">S'inscrire à la Newsletter</label>


                </div>
                    

                     <span>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et 
                     Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</span>


                     <button>S'inscrire</button>   
                     {errorMessage && <p>{errorMessage}</p>}
                </form>
            </div>


                
            </div>
        </main>
    );
};

export default Signup;
