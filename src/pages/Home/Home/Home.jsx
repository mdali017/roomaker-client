import { Helmet } from "react-helmet-async";
import AnnousmentSection from "../AnnousmentSection/AnnousmentSection";
import Banner from "../Banner/Banner";
import CallUsSection from "../CallUsSection/CallUsSection";
import Category from "../Category/Category";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularItem from "../PopularItem/PopularItem";
import RecommendSection from "../RecommendSection/RecommendSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Roomaker | Home</title>
        <link rel="canonical" href="" />
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ExtraSection></ExtraSection>
      <PopularItem></PopularItem>
      <CallUsSection></CallUsSection>
      <RecommendSection></RecommendSection>
      <AnnousmentSection></AnnousmentSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
