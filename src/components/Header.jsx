import {Link} from "react-router-dom";
import "../styles/header.css";
import vinted from "../assets/vinted.jpg";

const Header = ({userToken, setUserToken}) => {
return (

    <header>
        <div className="container">

            <div className="logo">
                <Link to="/"><img src={vinted} alt="" /></Link>
            </div>
            

            <div className="deconnecte">
                {userToken ? (
                <button
                onClick={() => {
                    setUserToken("");
                }}
                >
                Se déconnecter
                </button>
                ) : (
                <>
                <Link to="/signup">S'inscrire</Link>
                <Link to="/login">Se connecter</Link>
                </>
                )}
                <Link to="/publish">Vends tes articles</Link>
            </div>
        </div>
    </header>
    );
}

export default Header;