import "./Reviews.css";
import { GetData } from "../customHook/CustomHook";
import Card from "../card/Card";
const Reviews = () => {
  const reviews = GetData("data/reviews.json");
  return (
    <div className="reviews">
      <h2>customer reviews</h2>
      <div className="card-container">
        {reviews.map((review) => {
          return <Card key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
