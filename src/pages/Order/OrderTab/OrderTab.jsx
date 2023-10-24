import ProductCard from "../../Shared/ProductCard/ProductCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {item.map((item) => (
        <ProductCard key={item.id} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default OrderTab;
