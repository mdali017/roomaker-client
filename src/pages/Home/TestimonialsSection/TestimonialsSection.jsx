import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ReviewCard from "./reviewCard";

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading="What Our Client's Say"
        heading="Testimonials"
      ></SectionTitle>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
