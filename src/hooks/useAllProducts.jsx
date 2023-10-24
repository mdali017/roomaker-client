import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      });
  }, []);
  return [allProducts, loading];
};

export default useAllProducts;
