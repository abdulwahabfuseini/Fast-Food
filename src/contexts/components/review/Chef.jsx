import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ChefInfo } from "../../../assets/Data/SlideData";

const Chef = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container className="w-full h-[480px]  md:h-[600px] pt-10 px-3 sm:px-6 lg:px-16">
      <header className="pb-8 text-3xl text-center capitalize sm:4xl md:6xl">
        Meet Our Chefs
      </header>
      <Row>
        <Swiper
          spaceBetween={10}
          loop={true}
          speed={2000}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5.5,
            },
          }}
        >
          <Col>
            {ChefInfo.map((Chef, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="mb-2 text-center border-2 border-green-100 rounded-lg shadow-md bg-dry"
                >
                  {loading ? (
                    <ScaleLoader
                      className="py-20"
                      color="#36d7b7"
                      loading={loading}
                      size={100}
                      margin={2}
                    />
                  ) : (
                    <Col>
                      <img
                        src={Chef.image}
                        alt="/chef"
                        className="object-contain h-40 w-60 lg:h-64 sm:h-56"
                      />
                      <h1 className="py-2 text-lg bg-white">{Chef.name}</h1>
                    </Col>
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

export default Chef;
