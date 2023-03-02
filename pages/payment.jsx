import Link from "next/link";
import Image from "next/image";
import Notification from "./notificationTop";
import Navbar from "./navbar";
import Tags from "./components/tags";
import Stats from "./components/stats";
import Footer from "./footer";

export default function Payment() {
  return (
    <div className="payment-container">
      <Notification />
      <Navbar />
      <Tags />
      <div class="payment-content">
        <h3>Select Payment Method</h3>
        <div class="payment-boxes">
          <div class="box1">
            <input
              type="radio"
              id="method1"
              name="payment"
              value="creditcard"
            />
            <label for="method1"></label>
            <div class="payment-image"></div>
          </div>
          <div class="box2">
            <input type="radio" id="method2" name="payment" value="paypal" />
            <label for="method2"></label>
            <div class="payment-image"></div>
          </div>
          <div class="box3">
            <input type="radio" id="method3" name="payment" value="bitcoin" />
            <label for="method3"></label>
            <div class="payment-image"></div>
          </div>
          <div class="box4">
            <input type="radio" id="method4" name="payment" value="applepay" />
            <label for="method4"></label>
            <div class="payment-image">
              <p>Cash on Delivery</p>
            </div>
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

      <Stats />
      <Footer />
    </div>
  );
}
