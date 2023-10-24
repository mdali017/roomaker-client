import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ItemCard from "../../Shared/ItemCard/ItemCard";

const CategoryProductCard = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {/* <Link to={`/order`}> */}
        <button className="btn btn-outline border-0 border-b-4 my-9">
          See More
        </button>
      </Link>
    </div>
  );
};

export default CategoryProductCard;
