const ProductCard = ({ item }) => {
  const { name, image, details, price } = item;
  // TODO: Price
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className="absolute bg-slate-900 text-white px-3 py-1 right-0 mt-5">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title capitalize">{name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
