
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/home.css";

import Offer from "./Offer";
import OfferCard from "../components/OfferCard";

const Home = () => {

  const [offersList, setOffersList] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setOffersList(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log("ERREUR Home", error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>ça charge...</div>
  ) : (
      <main>
        <div className="container offers-bloc">
          {offersList.map((offer) => {
            console.log("L OFFRE>>>", offer.product_price);
            return <OfferCard key={offer._id} offer={offer} />;
          })}
        </div>
      </main>
  );
};

export default Home;
