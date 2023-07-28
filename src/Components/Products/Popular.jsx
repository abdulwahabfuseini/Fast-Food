import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { ProductCard } from "../../Assets/Data/ProductsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Products from "./Products";

const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <Container className="w-full h-full lg:pt-10 px-3 sm:px-6 lg:px-16" id="popular">
      <Row>
        <header className="py-6 text-2xl sm:text-4xl">
          Explore Our Popular Dishes
        </header>
        <Swiper
          navigation={{ nextEl, prevEl }}
          spaceBetween={10}
          loop={true}
          speed={1000}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full "
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            400: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 2.6,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {ProductCard.map((product, index) => {
            return (
              <SwiperSlide
                key={index}
              >
                <Products id={product.id} name={product.name} cover={product.cover} price={product.price} desc={product.desc} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex items-center justify-center gap-6 py-14">
          <button ref={(node) => setPrevtEl(node)}>
            <FaChevronLeft className="w-10 h-10 p-2 font-bold bg-white border-2 rounded-full border-star text-star lg:hover:ring-2 lg:hover:ring-slate-300" />
          </button>
          <button ref={(node) => setNextEl(node)}>
            <FaChevronRight className="w-10 h-10 p-2 font-bold bg-white border-2 rounded-full border-star text-star lg:hover:ring-2 lg:hover:ring-slate-300" />
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Popular;
