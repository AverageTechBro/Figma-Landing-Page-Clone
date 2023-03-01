import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Notification from "./notificationTop";
import Tags from "./components/tags";
import Footer from "./footer";
import SignedIn from "./signed-in";

export default function Contact() {
  return (
    <div className="contact-container">
      <style></style>
      <div className="edit-profile-container">
        <Notification />
        <SignedIn />
        <Tags />
        <div className="edit-profile-content">
          <div className="left-side">
            <div className="dashboard-container">
              <Image
                className="big-image"
                src={"/contact-thumbnail.svg"}
                width={420}
                height={420}
              />
              <p>
                <Image
                  className="dash-image"
                  src={"/contact-location.svg"}
                  width={30}
                  height={30}
                />{" "}
                Putalisadak, Kathmandu, Nepal
              </p>
              <p>
                <Image
                  className="dash-image"
                  src={"/contact-call.svg"}
                  width={30}
                  height={30}
                />{" "}
                01-53452590
              </p>
              <p>
                <Image
                  className="dash-image"
                  src={"/contact-mail.svg"}
                  width={30}
                  height={30}
                />{" "}
                btplanet.com.np
              </p>
            </div>
          </div>
          <div className="right-side">
            <h1>Contact Us</h1>
            <div className="first-input">
              <div className="bar-I">
                <label htmlFor="username"> First Name:*</label>
                <input type="text" placeholder="Jimmy " />
              </div>
              <div className="bar-II">
                <label htmlFor="username"> Last Name:*</label>
                <input type="text" placeholder="Mcgill" />
              </div>
            </div>

            <div className="fourth-input">
              <div className="bar-V">
                <label htmlFor="username"> Email Adress:*</label>
                <input type="text" placeholder="slippinjimmy@lawyer.com" />
              </div>
              <div className="bar-VI">
                <label htmlFor="username"> Contact Number:*</label>
                <input type="text" placeholder="01-512376" />
              </div>
            </div>
            <div className="fifth-input">
              <div className="bar-V">
                <label htmlFor="username"> Message*</label>
                <input type="text" />
              </div>
            </div>
            <button>SUBMIT</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
