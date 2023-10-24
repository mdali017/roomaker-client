import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const RecommendSection = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => {
        setRecommend(data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading="Should Try"
        heading="Our Recommends"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-10">
        {recommend.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </div>
      <div className="text-center mb-16">
        <button className="btn btn-outline btn-warning">See More </button>
      </div>
    </div>
  );
};

export default RecommendSection;
