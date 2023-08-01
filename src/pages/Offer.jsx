import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import axios from "axios";
import "../styles/offer.css";

const Offer = () => {

    const [offerInfos, setOfferInfos] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const { data } = await axios.get(
                    `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
                );
                setOfferInfos(data);
                setIsLoading(false);
            } catch (error) {
                console.log("ERREUR", error);
            }
        };

        fetchData();
    }, []);

    return isLoading ? (
        <div>Chargement...</div>
    ) : (
        <main>
            <div className="container offer-page">
                <div>
                    <img src={offerInfos.product_picture[0].secure_url} alt="photo produit" />
                </div>

                <div>
                    <p>{offerInfos.product_price} €</p>

                    <div>
                        {offerInfos.product_details.map((elem) => {
                            console.log(elem);

                            const keyName = Object.keys(elem)[0];
                            return (
                                <div>
                                    {keyName} : {elem[keyName]}
                                </div>
                            );
                        })}
                    </div>
                    
                    <button>Acheter</button>     
                </div>
            </div>
        </main>
    );
};
export default Offer;