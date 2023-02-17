import Head from "next/head";
import Image from "next/image";
import Logo from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import PromoCard from "./promocard";
import MainShop from "./mainshop";
import Navbar from "./navbar";
import Brand from "./brand";
import Stats from "./stats";
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
            <div className="swiper-slide">
              <div className="slide-content-container">
                <img
                  className="acer-nitro-I"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1075683415506026496/Nitro5-1024x731_1.png"
                  alt=""
                />
                <div className="laptop-showcase-text">
                  <div className="slide-header-container">
                    <h1>Acer Nitro</h1>
                    <p>Discounted Price</p>
                  </div>
                  <button>
                    SHOP NOW{" "}
                    <span>
                      <img
                        src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                        alt=""
                      />
                    </span>
                  </button>
                </div>
                <img
                  className="acer-nitro"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1075683415766085683/acer_1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">Dummy Text</div>
            <div className="swiper-slide">Dummy Text </div>
            <div className="swiper-slide">Dummy Text</div>
            <div className="swiper-slide">Dummy Text</div>
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
      <PromoCard
        title={"Lowest Prices "}
        titleII={"on Pre Sales!"}
        secondColor={"#000000"}
        firstColor={"#AE3027"}
      />
      <div className="position-one-time">
        <p className="mainshop-I-title">
          <span>Deals</span> of the Week! <b>View All</b>
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
      <PromoCard
        title={" Killer"}
        titleII={"Deals"}
        firstColor={"#000000"}
        secondColor={"#AE3027"}
      />
      <div className="position-one-time-II">
        <p className="mainshop-I-title">
          <span>Up to 70% OFF</span> Laptops!! <b>View All</b>{" "}
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
          <span>Gaming</span> Series! <b>View All</b>{" "}
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
          <span>Partner</span> Brands{" "}
        </p>
        <Brand />
      </div>
      <div className="home-stats-container">
        <Stats />
      </div>
      <div className="home-footer-container">
        <Footer />
      </div>
      <div className="final-word-container">
        <img
          src="https://media.discordapp.net/attachments/1075680327718141992/1075987872131334204/Vector18.png"
          alt=""
        />

        <p>2023 BT Planet. All Rights Reserved </p>
      </div>
    </div>
  );
}
