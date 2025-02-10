import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    demo_img?: StaticImageData;
  }[];
}

// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: false,
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Service",
    link: "/service",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/Agro-Consultion",
        title: "Agro Consultion",
      },
      { link: "/agroTech-solutions", title: "AgroTech Solutions" },
      { link: "/GreenHouse-Solution", title: "Green House Solutions" },
    ],
  },
  {
    id: 4,
    title: "Products",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/seeds-list",
        title: "Seeds",
      },
      { link: "/sprayers-list", title: "Sprayers" },
      { link: "/tools-list", title: "Agri Tech" },
      { link: "#", title: "Ornamentals" },
      { link: "#", title: "Fertilizers & Pesticides" },
    ],
  },
  {
    id: 5,
    title: "Projects",
    link: "/gallery",
    has_dropdown: false,
  },

  // {
  //   id: 6,
  //   title: "Pages",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/about", title: "About" },
  //     { link: "/product-list", title: "Product" },
  //     { link: "/product-details", title: "Product Details" },
  //     { link: "/faq", title: "FAQ" },
  //     { link: "/contact", title: "Contact" },
  //   ],
  // },

  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
