import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import pizzasvg from "../../Assets/images/SVG/pizzasvg.png"
import chickensvg from "../../Assets/images/SVG/thanksgiving.png"
import shawarmasvg from "../../Assets/images/SVG/shawarmasvg.png"
import burgersvg from "../../Assets/images/SVG/burgersvg.png"
import saladsvg from "../../Assets/images/SVG/saladsvg.png"

import {
  BurgerFoodProducts,
  ChickenFoodProducts,
  PizzaFoodProducts,
  SaladFoodProducts,
  ShawarmaFoodProducts,
} from "../../Assets/Data/ProductsData";
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
    <Container className="w-full h-full px-3 py-20 md:py-32 sm:px-6 lg:px-16" id="menu">
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
        <Col className="flex flex-wrap items-center justify-center gap-2 py-6 sm:px-8 md:px-0">
          <Button
            onClick={() => setFilter("PIZZA")}
            className={`${
              filter === "PIZZA" ? "active-tab" : "tab"
            } flex items-center gap-3 flex-col sm:flex-row`} 
          >
            <img src={pizzasvg} alt="svg" className="w-8 h-8" />
            <h6>Pizza</h6>
          </Button>
          <Button
            onClick={() => setFilter("CHICKEN")}
            className={`${
              filter === "CHICKEN" ? "active-tab" : "tab"
            } flex items-center gap-3 `} 
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
            } flex items-center gap-3`}  data-aos="fade-right"
          >
            <img src={burgersvg} alt="/" className="w-8 h-8" />
            <h6>Burger</h6>
          </Button>
          <Button
            onClick={() => setFilter("SALAD")}
            className={`${
              filter === "SALAD" ? "active-tab" : "tab"
            } flex items-center gap-3`}  data-aos="fade-right"
          >
            <img src={saladsvg} alt="svg" className="w-8 h-8" />
            <h6>Salad</h6>
          </Button>
        </Col>
        
        <Col className="grid grid-cols-2 gap-2 py-10 sm:grid-cols-3 lg:grid-cols-4 sm:gap-3">
          {products.map((product, index) => {
            return (
              <Col
                key={index}
                className="relative text-center shadow-md cursor-pointer bg-dry hover:shadow-xl hover:bg-white"
              >
                {loading ? (
                  <ScaleLoader
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
        {/* <Col>
          <img src="./images/SVG/vegetable2.png" className="absolute left-0 w-20 h-20 top-10" alt="vegetable" />
          <img src="./images/SVG/vegetable3.png" className="absolute w-16 h-16 -right-16 top-52" alt="vegetable" />
          <img src="./images/SVG/vegetable4.png" className="absolute -left-20 w-14 h-14 bottom-96" alt="vegetable" />
          <img src="./images/SVG/vegetable1.png" className="absolute right-0 w-12 h-12 -bottom-16" alt="vegetable" />
          <img src="./images/SVG/vegetables.png" className="absolute left-0 w-14 h-14 -bottom-16" alt="vegetable" />
          <img src="./images/SVG/vegetable2.png" className="absolute left-0 w-12 h-12 top-60" alt="vegetable" />
          <img src="./images/SVG/saladleafsvg.jpeg" className="absolute right-0 w-20 h-20 top-10" alt="vegetable" />
          <img src="./images/SVG/pepper.png" className="absolute w-12 h-12 top-96 -right-16" alt="vegetable" />
          <img src="./images/SVG/letucesvg.png" className="absolute h-14 w-14 -left-20 top-60" alt="vegetable" />
          <img src="./images/SVG/carrotsvg.png" className="absolute w-12 h-12 -left-20 top-96" alt="vegetable" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Menu;
