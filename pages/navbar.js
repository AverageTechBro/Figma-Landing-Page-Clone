import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <img className="Logo" src="https://i.imgur.com/ygucKR3.png" alt="" />
      <div className="search-bar">
        <input type="text" placeholder="What are you looking for?" />
        <button className="search-buton">
          <img src="https://i.imgur.com/5q4e60p.png" alt="" />
        </button>
      </div>
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
    </div>
  );
}
