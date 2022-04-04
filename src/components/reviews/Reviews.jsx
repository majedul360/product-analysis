import "./Reviews.css";
import { GetData } from "../customHook/CustomHook";
import Card from "../card/Card";
const Reviews = () => {
  const reviews = GetData("data/reviews.json");
  console.log(reviews);
  return (
    <div className="reviews">
      <div className="card-container">
        {reviews.map((review) => {
          return <Card key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
