import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`} key={offer._id}>
      <div className="offer-card">
        <div>
          {offer.owner.account && (
            <img src={offer.owner.account.secure_url} alt="" />
          )}
          
          <p>{offer.owner.account.username}</p>
        </div>

        <img src={offer.product_image.secure_url} alt="" />

        <div>
          <p>{offer.product_price} €</p>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
