import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section className="mb-10">
      <SectionTitle
        subHeading="From 11:00 am to 10:00 pm"
        heading="Order Online"
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h3 className="text-3xl uppercase text-center -mt-12 text-white">
              Beautiful Table
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h3 className="text-3xl uppercase text-center -mt-12 text-white">
              Wall Decor
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://images.pexels.com/photos/4740488/pexels-photo-4740488.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h3 className="text-3xl uppercase text-center -mt-12 text-white">
              Nice Bed
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h3 className="text-3xl uppercase text-center -mt-12 text-white">
              Drawer
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://images.pexels.com/photos/18161058/pexels-photo-18161058/free-photo-of-a-round-table-with-chairs-and-a-tv-in-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h3 className="text-3xl uppercase text-center -mt-12 text-white">
              Table & Chair
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
