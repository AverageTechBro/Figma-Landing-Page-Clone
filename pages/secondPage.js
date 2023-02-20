import Navbar from "./navbar";
import Footer from "./footer";
import Notification from "./notificationTop";
import MainShopRow from "./mainshoprow";
import { useState } from "react";
export default function Second() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="landing-page-container">
      <div className="second-page-container">
        <Notification />
        <Navbar />
        <div className="second-page-content-container">
          <div className="search-result">
            <p>
              <span>1597</span> results for <span>"Laptops"</span>
            </p>
            <div className="sorting-button">
              <img
                className="arrow-button"
                src="https://media.discordapp.net/attachments/1075680327718141992/1076025586687946792/Frame_2470.png"
                alt=""
              />
              <p>
                <span> Sort by: </span>Price High to Low
              </p>
              <img
                className="downpoint-button"
                src="https://media.discordapp.net/attachments/1075680327718141992/1076022636179636264/Vector19.png"
                alt=""
              />
            </div>
          </div>

          <div className="dropdown-menu">
            <button onClick={toggleDropdown}>Menu</button>
            {isOpen && (
              <ul>
                <div className="dropdown-menu-shade">
                  <div className="dropdown-filter ">
                    <div className="brand-filter">
                      <p>BRAND</p>
                      <input type="search" placeholder="Search" />
                      <div className="brand-filter-ind">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Asus (6)</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Lenovo (6)</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          value="Boat"
                        />
                        <label for="veichle3"> Mac (8)</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Acer (10)</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Dell (7)</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          value="Boat"
                        />
                        <label for="veichle3"> Ripple Raze (5)</label>
                      </div>
                    </div>
                    <div className="category-filter">
                      <p>CATEGORY</p>
                      <input type="search" placeholder="Search" />
                      <div className="brand-filter-ind">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Projector</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Monitor</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          value="Boat"
                        />
                        <label for="veichle3"> Printer</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Desktop</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Laptop</label>
                      </div>
                    </div>
                    <div className="processor-filter">
                      <p>PROCESSOR</p>
                      <div className="processor-filter-ind">
                        <p>Core i7</p>
                        <img
                          src="https://media.discordapp.net/attachments/1075680327718141992/1076022636179636264/Vector19.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
        <div className="flex-for-shop">
          <div className="filter-bar-container">
            <div className="brand-filter">
              <p>BRAND</p>
              <input type="search" placeholder="Search" />
              <div className="brand-filter-ind">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Asus (6)</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Lenovo (6)</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label for="veichle3"> Mac (8)</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Acer (10)</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Dell (7)</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label for="veichle3"> Ripple Raze (5)</label>
              </div>
            </div>
            <div className="category-filter">
              <p>CATEGORY</p>
              <input type="search" placeholder="Search" />
              <div className="brand-filter-ind">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Projector</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Monitor</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label for="veichle3"> Printer</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Desktop</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Laptop</label>
              </div>
            </div>
            <div className="processor-filter">
              <p>PROCESSOR</p>
              <div className="processor-filter-ind">
                <p>Core i7</p>
                <img
                  src="https://media.discordapp.net/attachments/1075680327718141992/1076022636179636264/Vector19.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="secondpage-mainshop-container">
            <MainShopRow
              discount1={"OUT OF STOCK"}
              discount2={"36% OFF"}
              discount3={"36% OFF"}
              discount4={"36% OFF"}
              thumbnail1={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
              }
              thumbnail2={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
              }
              thumbnail3={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
              thumbnail4={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
            />
            <MainShopRow
              discount1={"OUT OF STOCK"}
              discount2={"36% OFF"}
              discount3={"36% OFF"}
              discount4={"36% OFF"}
              thumbnail1={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
              }
              thumbnail2={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
              }
              thumbnail3={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
              thumbnail4={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
            />
            <MainShopRow
              discount1={"OUT OF STOCK"}
              discount2={"36% OFF"}
              discount3={"36% OFF"}
              discount4={"36% OFF"}
              thumbnail1={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816384733264/image_1811.png"
              }
              thumbnail2={
                "https://media.discordapp.net/attachments/1075680327718141992/1075785816061792277/image_1812.png"
              }
              thumbnail3={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
              thumbnail4={
                "https://media.discordapp.net/attachments/1075680327718141992/1075769849101418506/image_181.png"
              }
            />
          </div>
        </div>
      </div>
      <div className="home-footer-container secondpage-footer-container ">
        <Footer />
      </div>
    </div>
  );
}
