import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?size=626&ext=jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/beautiful-confortable-cozy-interior-style-design-generative-ai_751108-4838.jpg?size=626&ext=jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2182.jpg?size=626&ext=jpg&ga=GA1.1.244405832.1694164168&semt=sph" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-10264.jpg?size=626&ext=jpg&ga=GA1.1.244405832.1694164168&semt=sph" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/elegant-home-s-interior-design-lighting-fixture-loft-style_666746-1809.jpg?size=626&ext=jpg&ga=GA1.2.244405832.1694164168&semt=sph" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
