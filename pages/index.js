import IISectionedShop from "./components/II-sectioned-shop";
import SectionShop from "./components/section-shop";
import Head from "next/head";
import Image from "next/image";
import Logo from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

import MainShop from "./components/mainshop";
import Navbar from "./navbar";
import Brand from "./components/brand";
import Stats from "./components/stats";
import Footer from "./footer";
import Notification from "./notificationTop";
// import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Pagination } from "swiper/bundle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // initialize Swiper only on the client-side
      Swiper.use([Navigation, Pagination]);

      const mySwiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      setSwiper(mySwiper);
    }
  }, []);

  return (
    <div className="landing-page-container">
      <Notification />
      <Navbar />
      <div className="tag-container">
        <div className="tag-left-side">
          <img
            src="https://media.discordapp.net/attachments/1075680327718141992/1075682047735123978/Vector2.png"
            alt=""
          />
          <p>ALL CATEGORIES</p>
        </div>
        <div className="tag-right-side">
          <ul>
            <li>LAPTOPS</li>
            <li>PROJECTORS</li>
            <li>DESKTOP</li>
            <li>PRINTERS</li>
            <li>MONITORS</li>
          </ul>
        </div>
      </div>
      <div className="laptop-showcase-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">.</div>
            <div className="swiper-slide">. </div>
            <div className="swiper-slide">.</div>
            <div className="swiper-slide">.</div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <div className="first-shop-container">
        <div className="first-shop">
          <div className="shop-image-container">
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1075713422089531407/image1.png"
              alt=""
            />
          </div>
          <div className="shop-text">
            <p>Laptops</p>
            <button>
              SHOP NOW{" "}
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="first-shop">
          <div className="shop-image-container">
            <img
              className="printer"
              src="https://media.discordapp.net/attachments/1075680327718141992/1075713421762371675/image2.png"
              alt=""
            />
          </div>
          <div className="shop-text">
            <p>Printers</p>
            <button>
              SHOP NOW{" "}
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="first-shop">
          <div className="shop-image-container">
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1075713421535887391/image_113.png"
              alt=""
            />
          </div>
          <div className="shop-text">
            <p>Monitor</p>
            <button>
              SHOP NOW{" "}
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="first-shop">
          <div className="shop-image-container">
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1075713421284225024/image_102.png"
              alt=""
            />
          </div>
          <div className="shop-text">
            <p>Projector</p>
            <button>
              SHOP NOW{" "}
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <SectionShop />
      <div className="position-one-time">
        <p className="mainshop-I-title">
          <span>Deals</span> of the Week! <button>View All</button>
        </p>

        <div className="home-mainshop-container">
          <MainShop
            discount={"36% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"OUT OF STOCK"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"36% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"36% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"36% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
        </div>
      </div>
      <IISectionedShop />
      <div className="position-one-time-II">
        <p className="mainshop-I-title">
          <span>Up to 70% OFF</span> Laptops!! <button>View All</button>{" "}
        </p>
        <div className="home-mainshop-container">
          <MainShop
            discount={"70% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"70% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"OUT OF STOCK"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"75% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"75% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
        </div>
      </div>
      <div className="position-one-time">
        <p className="mainshop-I-title">
          <span>Gaming</span> Series! <button>View All</button>{" "}
        </p>
        <div className="home-mainshop-container">
          <MainShop
            discount={"70% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"OUT OF STOCK"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"75% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"75% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
          <MainShop
            discount={"75% OFF"}
            thumbnail={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            detials={
              "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
            }
            realPrice={"2,20,000"}
            initialPrice={"2,30,000"}
          />
        </div>
      </div>
      <div className="position-one-time">
        <p className="mainshop-I-title">
          <span>Partner</span> Brands <button>View All</button>
        </p>
        <Brand />
      </div>
      <div className="home-stats-container">
        <Stats />
      </div>
      <div className="home-footer-container">
        <Footer />
      </div>
    </div>
  );
}
