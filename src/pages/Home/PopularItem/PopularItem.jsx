import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../Shared/ItemCard/ItemCard";

const PopularItem = () => {
  const [populatItem, setPopulatItem] = useState([]);
  //   console.log(populatItem);

  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => {
        setPopulatItem(data.slice(0, 6));
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="Popular Item"
        heading="From Our Items"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10 mb-16">
        {populatItem.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>
      <div className="text-center mb-16">
        <button className="btn btn-outline btn-warning">See More </button>
      </div>
    </div>
  );
};

export default PopularItem;
