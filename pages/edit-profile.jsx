import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Notification from "./notificationTop";
import Tags from "./components/tags";
import Footer from "./footer";
import Dashboard from "./components/dashboard";

export default function EditProfile() {
  return (
    <div className="edit-profile-container">
      <Notification />
      <Navbar />
      <Tags />
      <div className="edit-profile-content">
        <div className="left-side">
          <h3>Edit User Profile</h3>
          <div className="user-profile">
            <Image src={"/Mr.Saul.jpg"} width={100} height={80} />
            <p>
              Saul Goodman <br />
              <span>slippinjimmy@laywer.com</span>
            </p>
          </div>

          <Dashboard />
        </div>
        <div className="right-side">
          <h3>Edit User Profile</h3>
          <div className="first-input">
            <div className="bar-I">
              <label htmlFor="username">
                {" "}
                <Image src={"/user.svg"} width={30} height={30} />
                Username
              </label>
              <input type="text" placeholder="Jimmy McGill" />
            </div>
            <div className="bar-II">
              <label htmlFor="username">
                {" "}
                <Image src={"/mail.svg"} width={30} height={30} />
                Email
              </label>
              <input type="text" placeholder="slippinjimmy@lawyer.com" />
            </div>
          </div>
          <div className="second-input">
            <div className="bar-III">
              <label htmlFor="username">
                {" "}
                <Image src={"/phone.svg"} width={30} height={30} />
                Phone
              </label>
              <input type="text" placeholder="9841xxxxxx" />
            </div>
          </div>
          <div className="third-input">
            <div className="bar-IV">
              <label htmlFor="username"> Current Passowrd</label>
              <input type="password" placeholder="**********" />
            </div>
          </div>
          <div className="fourth-input">
            <div className="bar-V">
              <label htmlFor="username"> New Password</label>
              <input type="password" placeholder="***********" />
            </div>
            <div className="bar-VI">
              <label htmlFor="username"> Confirm Password</label>
              <input type="password" placeholder="************" />
            </div>
          </div>
          <button>UPDATE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
