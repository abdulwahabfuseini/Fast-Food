import facebook from "../images/Social/facebookf.png";
import twitter from "../images/Social/twittersvg.png";
import Google from "../images/Social/googlesvg.png";
import instagram from "../images/Social/insta.png";
import whatsapp from "../images/Social/whatsapp.png";
import linkedin from "../images/Social/linkedin.png";

export const NavLinks = [
  {
    display: "Home",
    id: "home",
  },
  {
    display: "Popular",
    id: "popular",
  },
  {
    display: "About",
    id: "about",
  },
  {
    display: "Menu",
    id: "menu",
  },
  {
    display: "Review",
    id: "review",
  },
  {
    display: "Contact",
    id: "contact",
  },
];

export const FooterLinks = [
  {
    title: "Quicks Links",
    Links: [
      { display: "Home", id: "home" },
      { display: "About", id: "about" },
      { display: "Popular", id: "popular" },
      { display: "Terms & Conditions", id: "*" },
      { display: "Privacy Policy", id: "*" },
    ],
  },
  {
    title: "Links",
    Links: [
      { display: "Our Menu", id: "menu" },
      { display: "Review", id: "review" },
      { display: "Locate Us", id: "contact" },
      { display: "Our Blog", id: "review" },
      { display: "Make an Order", id: "menu" },
    ],
  },
  {
    title: "Contacts",
    Links: [
      { location: "Adum - kumasi" },
      { street: "Prempeh II street" },
      { email: "info@fastfood.com" },
      { tel: "+233 24 526 4999" },
      { phone: "+233 320 757 2409" },
    ],
  },
  {
    title: "Connect With Us",
    Links: [
      {
        id: 1,
        media: facebook,
        title: "fast food",
        color: "blue",
        link: "https://web.facebook.com/",
      },
      {
        id: 2,
        media: instagram,
        title: "fast_food",
        color: "red",
        link: "https://www.instagram.com/",
      },
      {
        id: 3,
        media: twitter,
        title: "@fast_food",
        color: "blue",
        link: "https://twitter.com/home",
      },
      {
        id: 4,
        media: Google,
        title: "fast food",
        color: "red",
        link: "https://www.google.com/search?q=google+search+console&oq=google+search&aqs=chrome.0.35i39i650j69i57j69i64j0i512j69i65l2j69i60l2.50374j0j4&sourceid=chrome&ie=UTF-8",
      },

      {
        id: 5,
        media: whatsapp,
        title: "0277984606",
        color: "green",
        link: "https://wa.me/277984606",
      },
      {
        id: 6,
        media: linkedin,
        title: "abdulwahabfuseini78",
        color: "blue",
        link: "https://www.linkedin.com/",
      },
    ],
  },
];
