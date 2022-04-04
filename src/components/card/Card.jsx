import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

const Card = ({ review }) => {
  const { name, img, desc, rating } = review;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{desc.slice(0, 220)}</p>
      <div className="ratings">
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        {rating > 4.5 ? (
          <FontAwesomeIcon className="icon" icon={faStar} />
        ) : (
          <FontAwesomeIcon className="icon" icon={faStarHalf} />
        )}
      </div>
    </div>
  );
};

export default Card;
