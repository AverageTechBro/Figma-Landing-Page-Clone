import Navbar from "./navbar";
import Footer from "./footer";
import Stats from "./stats";
import MainShopRow5 from "./mainshoprow5";
import Tags from "./tags";
import Notification from "./notificationTop";
export default function Third() {
  return (
    <div className="thirdpage-container landing-page-container ">
      <Notification />
      <Navbar />
      <Tags />
      <div className="thirdpage-content-container">
        <div className="directory-top">
          <img
            className="directory-house"
            src="https://media.discordapp.net/attachments/1075680327718141992/1076038061642743808/Vector20.png"
            alt=""
          />
          <img
            className="right-arrow"
            src="https://media.discordapp.net/attachments/1075680327718141992/1076038324411707422/Vector21.png"
            alt=""
          />
          <p>LAPTOP</p>
          <img
            className="right-arrow"
            src="https://media.discordapp.net/attachments/1075680327718141992/1076038324411707422/Vector21.png"
            alt=""
          />
          <p>ACER 5 NITRO</p>
        </div>
        <div className="laptop-purchase-container">
          <div className="laptop-main-thumbnail">
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1076042120965672981/acer_11.png"
              alt=""
            />
          </div>
          <div className="laptop-metadata-container">
            <p className="header">Acer Nitro 5 Gaming Laptop</p>
            <div className="laptop-price">
              <p className="mainprice">
                Rs. <span>1,03,600</span>
              </p>
              <p className="prevprice">Rs. 1,30,300</p>
            </div>
            <p className="save-details">Save 30%</p>
            <div className="delivery-status">
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1076043090550345738/delivery.png"
                alt=""
              />
              <p>
                <span>Delivery in: </span>48 Hours
              </p>
            </div>
            <div className="mini-laptop-thumbnails">
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1076042120965672981/acer_11.png"
                alt=""
              />
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1076042120965672981/acer_11.png"
                alt=""
              />
            </div>
            <div className="quantity-selection">
              <p className="quantity">Quantity</p>
              <button>-</button>
              <p className="number">2</p>
              <button>+</button>
            </div>
            <div className="chart-buttons">
              <button>ADD TO CHART</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="details-for-customer">
          <div className="delivery-details">
            <p className="head-delivery">Delivery</p>
            <div className="delivery-metadata">
              <p className="adress">
                <img
                  className="location-icon"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076067162034274335/Vector22.png"
                  alt=""
                />{" "}
                Bagmati Province, Kathmandu Met....{" "}
                <img
                  className="right-arrow"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076067161795211295/Vector23.png"
                  alt=""
                />
              </p>
              <p className="standard-delivery">
                Standard Delivery, 2 days <span>Free</span>
              </p>
              <p className="free-shipping">Enjoy free shipping</p>
            </div>
          </div>
          <div className="service-details">
            <p className="head-service">Service</p>
            <div className="service-metadata">
              <ul>
                <li>
                  7 Days Returns{" "}
                  <img
                    className="right-arrow"
                    src="https://media.discordapp.net/attachments/1075680327718141992/1076067161795211295/Vector23.png"
                    alt=""
                  />
                </li>
              </ul>
              <p>Change of mind is not applicable</p>
              <ul>
                <li>1 Year Seller Warranty</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="query-section">
          <p className="q-about">
            <span>Questions</span> about this Product (4)
          </p>
          <div className="for-view-all">
            <div className="questions-answers">
              <div className="question">
                <img
                  className="question-icon"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076069170829086761/question.png"
                  alt=""
                />
                <div className="text">
                  <p>1 tb ssd or hdd?</p>
                  <p>Ashish M. - 13 Nov 2022</p>
                </div>
              </div>
              <div className="question">
                <img
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076069170577408060/answer.png"
                  alt=""
                />
                <div className="text">
                  <p>1 tb hdd?</p>
                  <p>Showroom - 13 Nov 2022</p>
                </div>
              </div>
              <div className="question">
                <img
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076069170376085535/QA.png"
                  alt=""
                />

                <p>4 products questions and answers</p>
              </div>
            </div>

            <div className="view-all">
              <p>View All</p>
            </div>
          </div>
        </div>
        <p className="ask-questions">Ask Questions?</p>
        <div className="product-info">
          <div className="product-specs">
            <p className="product-spec-det">
              Products <span>Specifications</span>
            </p>
            <div className="horizontal-split">
              <div className="left-side">
                <p>
                  Brand
                  <br />
                  <span>Acer</span>
                </p>
                <p>
                  Display Size
                  <br />
                  <span>15.6 inch</span>
                </p>
                <p>
                  Storage capacity
                  <br />
                  <span>1 TB</span>
                </p>
              </div>
              <div className="right-side">
                <p>
                  RAM Memory <br />
                  <span>16 GB</span>
                </p>
                <p>
                  Processor <br />
                  <span>Intel Core i5</span>
                </p>
                <p>
                  Generation <br />
                  <span>10th Gen</span>
                </p>
              </div>
            </div>
          </div>
          <div className="product-details">
            <p className="product-spec-det">
              Product <span>Details</span>
            </p>
            <div className="details">
              <ul>
                <p>
                  <li> </li>AMD Ryzen 7 5800H Mobile Processor
                  (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) |
                  Windows 10 Home{" "}
                </p>
                <p>
                  <li> </li> 15.6″ Full HD (1920 x 1080) Widescreen LED-backlit
                  IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                </p>
                <p>
                  <li> </li>NVIDIA GeForce GTX 1650 Up to 4 GB discrete graphic
                  card provides excellent ability in a variety of multimedia
                  applications and user experiences
                </p>
              </ul>
            </div>
          </div>
        </div>
        <p className="what-box">
          <span>What's in the box </span>1x Acer Nitro 5, 1x Charger, 1x User
          Manual Guide{" "}
        </p>
        <div className="similar-products">
          <p className="similar-text">
            Similar <span>Products</span>
          </p>
          <MainShopRow5
            discount1={"36% OFF"}
            discount2={"OUT OF STOCK"}
            discount3={"36% OFF"}
            discount4={"36% OFF"}
            discount5={"36% OFF"}
            thumbnail1={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            thumbnail2={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
            }
            thumbnail3={
              "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
            }
            thumbnail4={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
            thumbnail5={
              "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
            }
          />
        </div>
        <div className="home-stats-container">
          <Stats />
        </div>
      </div>
      <div className="home-footer-container">
        <Footer />
      </div>
    </div>
  );
}
