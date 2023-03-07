import Notification from "./notificationTop";
import Navbar from "./navbar";
import Tags from "./components/tags";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";

export default function Track() {
  return (
    <div className="track-container">
      <Notification />
      <Navbar />
      <Tags />
      <div className="track-content">
        <h3 className="main-h3">Track the package</h3>
        <div className="track-content-container">
          <div className="top-section">
            <div className="left-side">
              <p>
                Order ID: <span> 0D4534533543 </span>
              </p>
              <p>
                Order ID: <span>0D4534533543</span>{" "}
              </p>
            </div>
            <div className="right-side">
              <p>
                Expected Arrival: <span>01/05/23</span>{" "}
              </p>
              <p>
                Status: <span>Order Shipped</span>{" "}
              </p>
            </div>
          </div>
          <div className="mid-section">
            <div className="mid-top-section">
              <div className="bar-container">
                <div className="bar-I">
                  <Image src={"/tick-blue.svg"} width={40} height={40} />
                  <div className="blue-bar"></div>
                </div>
                <div className="bar-I">
                  <Image src={"/tick-blue.svg"} width={40} height={40} />
                  <div className="gray-bar"></div>
                </div>
                <div className="bar-II">
                  <Image src={"/gray-circle.svg"} width={40} height={40} />
                  <div className="gray-bar"></div>
                </div>
                <div className="bar-II">
                  <Image src={"/gray-circle.svg"} width={40} height={40} />
                </div>
              </div>
              <div className="mid-bottom-section">
                <p>
                  {" "}
                  <span> Order Processed</span>{" "}
                </p>
                <p>
                  {" "}
                  <span>Order Shipped</span>{" "}
                </p>
                <p>
                  {" "}
                  <span>Order in Route</span>
                </p>
                <p>
                  {" "}
                  <span>Order Received</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border-purpose"></div>
          <div className="bottom-section">
            <div className="bottom-top-section">
              <h3>Order Items</h3>
              <h3>Quantity</h3>
            </div>
            <div className="bottom-bottom-section">
              <div className="laptop-container1">
                <p>Acer Nitro 5 Gaming Laptop 15.6" 144Hz FHD Display</p>
                <h4>1</h4>
              </div>
              <div className="laptop-container2">
                <p>Acer Nitro 5 Gaming Laptop 15.6" 144Hz FHD Display</p>
                <h4>1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
