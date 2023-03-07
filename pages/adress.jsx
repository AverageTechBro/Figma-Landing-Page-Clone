import Notification from "./notificationTop";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

export default function Adress() {
  return (
    <div className="adress-container">
      <Notification />
      <Navbar />
      <div className="delivery-adress-container">
        <h5>Delivery Adress</h5>
        <div className="options">
          <input type="radio" id="p1" name="paragraph" value="p1" />

          <p className="p1">Home</p>

          <input type="radio" id="p2" name="paragraph" value="p2" />

          <p className="p2"> Work </p>

          <input type="radio" id="p3" name="paragraph" value="p3" />

          <p className="p3"> Others</p>
        </div>
      </div>
      <div className="adress-content">
        <div className="left-side">
          <div className="bar-I">
            <label htmlFor="username">
              {" "}
              <Image src={"/user.svg"} width={30} height={30} />
              Name
            </label>
            <input type="text" placeholder="Jimmy McGill" />
          </div>
          <div className="bar-I">
            <label htmlFor="username">
              {" "}
              <Image src={"/Contact.svg"} width={30} height={30} />
              Contact
            </label>
            <input type="text" placeholder="9871xxxxxx" />
          </div>
          <div className="bar-I">
            <label htmlFor="username">
              {" "}
              <Image src={"/mail.svg"} width={30} height={30} />
              Email
            </label>
            <input type="text" placeholder="saulgoodman@lawyer.com" />
          </div>
          <div className="top-option">
            <div className="option1">
              <label htmlFor="text">Provinces</label>
              <p>Select Provinces</p>
            </div>
            <div className="option1">
              <label htmlFor="text">District</label>
              <p>Select District</p>
            </div>
          </div>
          <div className="bottom-option">
            <div className="option1">
              <label htmlFor="text">Municipality</label>
              <p>Select Municipality</p>
            </div>
            <div className="option1">
              <label htmlFor="text">Ward</label>
              <p>Select Ward</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="top-section">
            <h4>Order</h4>
            <div className="content-container">
              <p className="specs">
                Acer Nitro 5 Gaming Laptop 15.6" 144hz FHD Display
              </p>
              <p className="price">
                Rs <span>1,03,050</span>
              </p>
            </div>
            <div className="content-container">
              <p className="specs">
                Acer Nitro 5 Gaming Laptop 15.6" 144hz FHD Display
              </p>
              <p className="price">
                Rs <span>1,03,050</span>
              </p>
            </div>
          </div>
          <div className="order-container">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>
                Subtotal <span>RS 1,03,00</span>
              </p>
              <p>
                Shipping <span>Rs 50</span>
              </p>
              <p>
                Total (inclusive of tax){" "}
                <span>
                  Rs <b>1,03,050</b>
                </span>
              </p>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
