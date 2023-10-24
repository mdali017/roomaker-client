import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useAllProducts from "../../hooks/useAllProducts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryProductCard from "./CategoryProductCard/CategoryProductCard";

const ProductCategory = () => {
  const [allProducts] = useAllProducts();

  const furniture = allProducts.filter((item) => item.category === "Furniture");
  const lighting = allProducts.filter((item) => item.category === "Lighting");
  const wallDecor = allProducts.filter(
    (item) => item.category === "Wall Decor"
  );
  const textiles = allProducts.filter((item) => item.category === "Textiles");
  const offered = allProducts.filter((item) => item.category === "Offered");
  // const popular = allProducts.filter((item) => item.category === "Popular");
  // console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Roomaker | Items</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        title="Our Products"
        img="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=600"
      ></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offered"
      ></SectionTitle>

      {/* Offered Items */}
      <CategoryProductCard items={offered}></CategoryProductCard>
      {/* Furniture Item */}
      <CategoryProductCard
        items={furniture}
        title="Furniture"
        img={
          "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ></CategoryProductCard>

      {/* Lightting Items */}
      <CategoryProductCard
        items={lighting}
        title="Lighting"
        img={
          "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ></CategoryProductCard>

      {/* Wall Decor Items */}
      <CategoryProductCard
        items={wallDecor}
        title={"Wall Decor"}
        img={
          "https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ></CategoryProductCard>

      {/* Textiles Items */}
      <CategoryProductCard
        items={textiles}
        title={"Textiles"}
        img={
          "https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ></CategoryProductCard>
    </div>
  );
};

export default ProductCategory;
