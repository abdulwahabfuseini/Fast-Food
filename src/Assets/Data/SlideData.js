import online from "../images/SVG/onlinesvg.png";
import service from "../images/SVG/service.png";
import kitchen from "../images/SVG/kitchensvg.png";
import preserve from "../images/SVG/preservsvg.png";
import place from "../images/SVG/places.png";
import chef from "../images/SVG/chefsvg.png";
import Chef1 from "../images/CHEF/chef1.png";
import Chef2 from "../images/CHEF/chef5.png";
import Chef3 from "../images/CHEF/chef6.png";
import Chef4 from "../images/CHEF/chef11.png";
import Chef5 from "../images/CHEF/chef8.png";
import Chef6 from "../images/CHEF/chef12.png";
import Chef7 from "../images/CHEF/chef7.png";
import Chef8 from "../images/CHEF/chef10.png";
import Chef9 from "../images/CHEF/chef9.png";
import Chef10 from "../images/CHEF/chef9.png";
import Chef11 from "../images/CHEF/chef4.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

export const HomeData = [
  {
    id: 1,
    title: "Hungry?",
    mainTitle: "just make an order and it will",
    subTitle: "be delivered to your doorStep",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quo tempora quibusdam fuga distinctio adipisicing elit. Quo tempora quibusdam fuga distinctio adipisicing elit. distinctio!",
  },
];
export const AboutData = [
  {
    image: Chef11,
    title: "we are more than",
    subTitle: "Multiple Service",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempora quibusdam fuga distinctio adipisicing elit. Quo tempora quibusdam fuga distinctio adipisicing elit. Quo tempora quibusdam fuga distinctio!",
    service: [
      { image: online, name: "online order" },
      { image: service, name: "24/7 service" },
      { image: kitchen, name: "clean kitcken" },
      { image: preserve, name: "pre-reservation" },
      { image: place, name: "organized place" },
      { image: chef, name: "super chefs" },
    ],
  },
];

export const ChefInfo = [
  {
    image: Chef1,
    name: "Name",
  },
  {
    image: Chef2,
    name: "Name",
  },
  {
    image: Chef3,
    name: "Name",
  },
  {
    image: Chef4,
    name: "Name",
  },
  {
    image: Chef5,
    name: "Name",
  },
  {
    image: Chef6,
    name: "Name",
  },
  {
    image: Chef7,
    name: "Name",
  },
  {
    image: Chef8,
    name: "Name",
  },
  {
    image: Chef9,
    name: "Name",
  },
  {
    image: Chef10,
    name: "Name",
  },
];

export const Socialconnect = [
  {
    id: 1,
    icon: <FaFacebookF  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1"/>,
    title: "fast food",
    color: "blue",
    link: "https://web.facebook.com/",
  },
  {
    id: 2,
    icon: <FaInstagram  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "fast_food",
    color: "red",
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <FaTwitter  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "@fast_food",
    color: "blue",
    link: "https://twitter.com/home",
  },
  {
    id: 4,
    icon: <FaGoogle  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "fast food",
    color: "red",
    link: "https://www.google.com/search?q=google+search+console&oq=google+search&aqs=chrome.0.35i39i650j69i57j69i64j0i512j69i65l2j69i60l2.50374j0j4&sourceid=chrome&ie=UTF-8",
  },

  {
    id: 5,
    icon: <FaWhatsapp  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "0277984606",
    color: "green",
    link: "https://wa.me/277984606",
  },
  {
    id: 6,
    icon: <FaYoutube  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "fast food",
    color: "red",
    link: "https://www.youtube.com/",
  },
  {
    id: 7,
    icon: <FaLinkedin  className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />,
    title: "abdulwahabfuseini78",
    color: "blue",
    link: "https://www.linkedin.com/",
  },
];
