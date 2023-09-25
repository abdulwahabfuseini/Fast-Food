import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import pizzasvg from "../../assets/images/SVG/pizzasvg.png"
import chickensvg from "../../assets/images/SVG/chicken.png"
import shawarmasvg from "../../assets/images/SVG/shawarma.png"
import burgersvg from "../../assets/images/SVG/burgersvg.png"
import saladsvg from "../../assets/images/SVG/saladsvg.png"
import vegetable1 from "../../assets/images/Vegetables/tomato.png"
import vegetable2 from "../../assets/images/Vegetables/tomatoes.png"
import vegetable3 from "../../assets/images/Vegetables/lettuce-2.png"
import vegetable4 from "../../assets/images/Vegetables/greenpeppersvg.png"
import vegetable5 from "../../assets/images/Vegetables/pepper.png"
import vegetable6 from "../../assets/images/Vegetables/leaf.png"


import {
  BurgerFoodProducts,
  ChickenFoodProducts,
  PizzaFoodProducts,
  SaladFoodProducts,
  ShawarmaFoodProducts,
} from "../../assets/Data/ProductsData";
import ScaleLoader from "react-spinners/ScaleLoader";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [filter, setFilter] = useState("PIZZA");
  const [products, setProducts] = useState(PizzaFoodProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (filter === "PIZZA") {
      setProducts(PizzaFoodProducts);
    }
    if (filter === "CHICKEN") {
      setProducts(ChickenFoodProducts);
    }
    if (filter === "SHAWARMA") {
      setProducts(ShawarmaFoodProducts);
    }
    if (filter === "BURGER") {
      setProducts(BurgerFoodProducts);
    }
    if (filter === "SALAD") {
      setProducts(SaladFoodProducts);
    }
    setTimeout(() => {
      setLoading(false);
    }, [400]);
  }, [filter]);

  return (
    <Container className="w-full h-full px-3 py-20 md:py-32 sm:px-12 md:px-8 lg:px-16" id="menu">
      <Row className="relative">
        <header className="text-3xl leading-normal text-center sm:text-4xl md:7xl">
          Wake up Early <br />
          <span>Eat Fresh & Healthy</span>
        </header>
        <p className="py-4 text-lg text-center" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ad
          ratione, nihil <br /> deserunt ullam illo nemo iste repudiandae, nisi
          corporis rem et. Cupiditate quo iure voluptatum <br /> voluptatem
          expedita repudiandae quod!
        </p>
        <Col className="flex flex-wrap items-center justify-center gap-2">
          <Button
            onClick={() => setFilter("PIZZA")}
            className={`${
              filter === "PIZZA" ? "active-tab" : "tab"
            } flex items-center gap-3`} 
          >
            <img src={pizzasvg} alt="svg" className="w-8 h-8" />
            <h6>Pizza</h6>
          </Button>
          <Button
            onClick={() => setFilter("CHICKEN")}
            className={`${
              filter === "CHICKEN" ? "active-tab" : "tab"
            } flex items-center gap-3`} 
          >
            <img src={chickensvg} alt="svg" className="w-8 h-8" />
            <h6>Chicken</h6>
          </Button>
          <Button
            onClick={() => setFilter("SHAWARMA")}
            className={`${
              filter === "SHAWARMA" ? "active-tab" : "tab"
            } flex items-center gap-3`}
          >
            <img
              src={shawarmasvg}
              alt="svg"
              className="w-8 h-8"
            />
            <h6>Shawarma</h6>
          </Button>
          <Button
            onClick={() => setFilter("BURGER")}
            className={`${
              filter === "BURGER" ? "active-tab" : "tab"
            } flex items-center gap-3`} 
          >
            <img src={burgersvg} alt="/" className="w-8 h-8" />
            <h6>Burger</h6>
          </Button>
          <Button
            onClick={() => setFilter("SALAD")}
            className={`${
              filter === "SALAD" ? "active-tab" : "tab"
            } flex items-center gap-3`} 
          >
            <img src={saladsvg} alt="svg" className="w-8 h-8" />
            <h6>Salad</h6>
          </Button>
        </Col>
        
        <Col className="grid grid-cols-2 gap-2 py-10 sm:grid-auto-fit-xs sm:gap-4">
          {products.map((product, index) => {
            return (
              <Col
                key={index}
                className="relative z-20 text-center shadow-md cursor-pointer bg-dry lg:hover:shadow-xl hover:bg-white"
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
                  <>
                    <MenuItems
                      id={product.id}
                      name={product.name}
                      cover={product.cover}
                      price={product.price}
                    />
                  </>
                )}
              </Col>
            );
          })}
        </Col>
        <Col>
          <img src={vegetable1} className="absolute object-contain w-16 h-14 sm:h-24 sm:w-24 sm:left-10 top-2 lg:top-10" alt="vegetable" />
          <img src={vegetable2} className="absolute right-0 object-contain w-16 h-14 sm:h-24 sm:w-24 sm:right-10 top-2 lg:top-10" alt="vegetable" />
          <img src={vegetable3} className="absolute object-contain w-16 -left-8 h-14 sm:h-32 sm:w-32 sm:-left-24 top-32 lg:top-48" alt="vegetable" />
          <img src={vegetable4} className="absolute object-contain w-16 -right-6 h-14 sm:h-24 sm:w-24 sm:-right-12 top-32 lg:top-48" alt="vegetable" />
          <img src={vegetable5} className="absolute object-contain w-16 h-14 sm:h-32 sm:w-32 -bottom-6 sm:-left-24" alt="vegetable" />
          <img src={vegetable6} className="absolute right-0 w-16 h-14 sm:h-24 sm:w-24 -bottom-4 object-6contain sm:-right-10" alt="vegetable" />
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
