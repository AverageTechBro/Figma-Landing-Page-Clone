import Notification from "./notificationTop";
import Navbar from "./navbar";
import Tags from "./components/tags";
import Stats from "./components/stats";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";
import IndCart from "./components/ind-cart";
export default function Cart() {
  return (
    <div className="cart-container">
      <Notification />
      <Navbar />
      <Tags />
      <div className="cart-content-container">
        <p className="cart-title">Shopping Cart</p>
        <div className="select-items">
          <div className="select-option">
            <input type="checkbox" />
            <p className="select-text">SELECT ALL (2 items)</p>
          </div>
          <p>
            {" "}
            <Image src={"/delivery.svg"} width={20} height={20} /> Delivery in:{" "}
            <span>48 Hours</span>
          </p>
        </div>
        <div className="actual-cart-container">
          <div className="actual-cart">
            <IndCart
              display={"/cart-acer.svg"}
              specs={'Acer Nitro 5 Gaming Laptop15.6" 144Hz FHD Display '}
              model={"Acer, Gaming"}
              quantity={"Only 5 items(s) left in stock"}
              price={"1,03,600"}
              amount={"1"}
            />
            <IndCart
              display={"/cart-monitor.svg"}
              specs={
                "Lenovo IdeaCentre AIO 3 12th Gen Intel i5 23.8″ FHD IPS 3-Side "
              }
              model={"Lenovo, Desktop"}
              quantity={"Only 2 items(s) left in stock"}
              price={"97,600"}
              amount={"2"}
            />
          </div>
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
      <Stats />
      <Footer />
    </div>
  );
}
