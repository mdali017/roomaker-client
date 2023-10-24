const ItemCard = ({ item }) => {
  // console.log(item);
  const { name, image, details, price } = item;
  return (
    <div className="flex justify-between">
      <div className="w-1/3 mr-5 ">
        <img
          className="w-[200px] h-[150px]"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{details}</p>
      </div>
      <div className="text-orange-500">${price}</div>
    </div>
  );
};

export default ItemCard;
