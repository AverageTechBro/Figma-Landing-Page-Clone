import Link from "next/link";
import Image from "next/image";
import SignedIn from "./signed-in";
import Notification from "./notificationTop";
import Tags from "./components/tags";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import Footer from "./footer";
export default function MyOrder() {
  return (
    <div className="my-order-container">
      <Notification />
      <SignedIn />
      <Tags />
      <div className="my-order-content">
        <div className="top-section">
          <Dashboard />
          <div className="right-side">
            <h3>My Orders</h3>
            <div className="right-content">
              <p>
                Tracking Order <br />
                <b>#50nms12tly</b>
                <br />
                <span>06 February, 2023</span>
              </p>
              <div className="mid-part">
                <Image src={"/order-laptop.svg"} width={200} height={200} />
                <p>
                  New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)
                </p>
                <h4>
                  Rs. <span>2,20,000</span>
                </h4>
              </div>
              <div className="end-part">
                <p>Cash On Delivery</p>
                <button>CANCEL ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <Footer />
    </div>
  );
}
