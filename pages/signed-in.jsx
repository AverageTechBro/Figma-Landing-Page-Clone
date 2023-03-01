import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function SignedIn() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="navbar-container">
      <Link href="/">
        <Image className="Logo" src={"/logo.svg"} width={200} height={70} />
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="What are you looking for?" />
        <button className="search-buton">
          <img src="https://i.imgur.com/5q4e60p.png" alt="" />
        </button>
      </div>
      <ul className="pc-ul">
        <div className="right-side">
          <div className="shop">
            <Image src={"/cart.svg"} width={30} height={30} />
            <Link href="/secondPage">Cart </Link>
          </div>
          <Link href="/thirdpage">
            <div className="sign-in">
              <Image src={"/Mr-SG.svg"} width={50} height={50} />
              <p>Welcome, Saul</p>
            </div>
          </Link>
        </div>
      </ul>
      <div className="dropdown-menu">
        <button onClick={toggleDropdown}>Menu</button>
        {isOpen && (
          <ul className="dropdown-ul">
            <div className="right-side">
              <div className="shop">
                <img
                  className="cart-icon"
                  src="https://media.discordapp.net/attachments/1075680327718141992/1075680414976462859/cart.png"
                  alt=""
                />
                <Link href="/secondPage">
                  Cart{" "}
                  <img
                    className="down-vector"
                    src="https://media.discordapp.net/attachments/1075680327718141992/1075694872079642684/Vector4.png"
                    alt=""
                  />{" "}
                </Link>
              </div>
              <Link href="/thirdpage">
                <div className="sign-in">
                  <img
                    src="https://media.discordapp.net/attachments/1075680327718141992/1075681453951696957/Vector1.png"
                    alt=""
                  />
                  <p>Sign In</p>
                </div>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
