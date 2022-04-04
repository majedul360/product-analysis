import { Link } from "react-router-dom";
import Card from "../card/Card";
import { GetData } from "../customHook/CustomHook";
import "./Home.css";
const Home = () => {
  const reviews = GetData("data/reviews.json");
  return (
    <div className="home">
      <div className="banner">
        <div className="box">
          <h1>BEST LAPTOP 2022: 15 BEST LAPTOPS YOU CAN BUY</h1>
          <p>
            The best laptops for you, from ultraportables to high-powered
            editing machines.The best laptop of 2022 can come with a variety of
            brands, prices, and features. Here, we’ve got the rest of the best
            laptops, Windows 10 business notebooks, gaming rigs, Chromebooks,
            laptops for school, and 2-in-1 convertibles.
          </p>
        </div>
        <div className="box">
          <img src="images/laptop.webp" alt="" />
        </div>
      </div>
      <div className="customer-reviews">
        <h2>customer reviews</h2>
        <div className="card-container">
          {reviews.slice(0, 3).map((review) => {
            return <Card key={review.id} review={review} />;
          })}
        </div>
        <Link to="/reviews" className="btn">
          see all reviews
        </Link>
      </div>
    </div>
  );
};

export default Home;
