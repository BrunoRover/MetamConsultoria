import "./service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import services from "../../../data/services";

const Service = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1350: {
          slidesPerView: 4,
        },
      }}
      style={{ padding: "0 60px" }}
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <div className="service-container">
            <div className="service-icon">{service.icon}</div>
            <div className="service-head">
              <h5>{service.name}</h5>
            </div>
            <div className="service-body">
              <p>{service.body}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Service;