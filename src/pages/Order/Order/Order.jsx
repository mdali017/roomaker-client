import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["Furniture", "Lighting", "Wall Decor", "Textiles"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [allProducts] = useAllProducts();

  const furniture = allProducts.filter((item) => item.category === "Furniture");
  const lighting = allProducts.filter((item) => item.category === "Lighting");
  const wallDecor = allProducts.filter(
    (item) => item.category === "Wall Decor"
  );
  const textiles = allProducts.filter((item) => item.category === "Textiles");
  return (
    <div>
      <Cover
        title="Order Now"
        img="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600"
      ></Cover>

      {/* For Tab Section */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Furniture</Tab>
          <Tab>Lighting</Tab>
          <Tab>Wall Decor</Tab>
          <Tab>Textiles</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={furniture}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={lighting}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={wallDecor}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={textiles}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
