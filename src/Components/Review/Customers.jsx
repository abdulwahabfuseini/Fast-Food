import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Customer } from "../../Assets/Data/Comment";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Rate } from "antd";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Customers = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container
      className="w-full h-full px-3 py-4 sm:py-10 sm:px-6 lg:px-16"
      data-aos="fade-right"
    >
      <header className="pb-8 text-3xl text-center capitalize sm:4xl md:6xl">
        what our customers say about us
      </header>
      <Row>
        <Swiper
          spaceBetween={10}
          loop={true}
          speed={3000}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1.4,
            },
            600: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <Col>
            {Customer.map((comment, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center p-4 pb-8 mb-24 text-center border-2 border-green-100 shadow-md pxt-4 bg-dry"
                >
                  {loading ? (
                    <ScaleLoader
                      color="#36d7b7"
                      loading={loading}
                      size={100}
                      margin={2}
                    />
                  ) : (
                    <Row className="grid place-items-center relative">
                      <FaQuoteLeft  className="absolute top-2 left-2 w-8 h-8 text-gray-300"/>
                      <Col className="z-10">
                        <img
                          src={comment.image}
                          alt=""
                          className="w-24 h-24 border-4 border-green-200 rounded-full"
                        />
                      </Col>
                      <Col className="relative -mt-12 pt-14 pb-4 px-2 bg-white rounded-2xl before:contents() before:w-6 before:h-6 before:-bottom-2 before: before:left-36 before:absolute before:bg-white  before:rotate-45 before:-z-10">
                        <h1 className="text-smtext-center">{comment.desc}</h1>
                        <p className="pt-3 text-lg">{comment.name}</p>
                        <Rate defaultValue={4} />
                      </Col>
                      <FaQuoteRight className="absolute -bottom-6 right-2 w-8 h-8 text-gray-300"/>
                    </Row>
                  )}
                </SwiperSlide>
              );
            })}
          </Col>
        </Swiper>
      </Row>
    </Container>
  );
};

export default Customers;
