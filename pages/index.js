import Head from "next/head";
import Image from "next/image";
import Logo from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

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
      <div className="notification-top">
        <p>Get discount + Free Delivery on over RS 500</p>
        <button>
          Use Code: NOW15{" "}
          <img
            src="https://media.discordapp.net/attachments/1075680327718141992/1075685687703109673/Vector3.png"
            alt=""
          />
        </button>
      </div>
      <div className="navbar-container">
        <img className="Logo" src="https://i.imgur.com/ygucKR3.png" alt="" />
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-buton">
            <img src="https://i.imgur.com/5q4e60p.png" alt="" />
          </button>
        </div>
        <div className="right-side">
          <div className="shop">
            <img
              className="cart-icon"
              src="https://media.discordapp.net/attachments/1075680327718141992/1075680414976462859/cart.png"
              alt=""
            />
            <p>
              Cart{" "}
              <img
                className="down-vector"
                src="https://media.discordapp.net/attachments/1075680327718141992/1075694872079642684/Vector4.png"
                alt=""
              />{" "}
            </p>
          </div>
          <div className="sign-in">
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1075681453951696957/Vector1.png"
              alt=""
            />
            <p>Sign In</p>
          </div>
        </div>
      </div>
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
    </div>
  );
}
