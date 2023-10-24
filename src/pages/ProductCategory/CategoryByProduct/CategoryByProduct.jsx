import useAllProducts from "../../../hooks/useAllProducts";

const CategoryByProduct = () => {
  const [allProducts] = useAllProducts();

  const popular = allProducts.filter((item) => item.category === "Popular");

  return (
    <div>
      <h1>{popular.length}</h1>
    </div>
  );
};

export default CategoryByProduct;
