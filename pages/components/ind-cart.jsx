import Image from "next/image";
import Link from "next/link";
export default function IndCart(props) {
  return (
    <div className="ind-cart-container">
      <div className="left-side">
        <input type="checkbox" />
        <Image
          className="cart-thumbnail"
          src={props.display}
          width={200}
          height={200}
        />
        <div className="text">
          <p className="specs">
            {props.specs} <br />
            <span>{props.model}</span>
          </p>
          <p className="quantity">{props.quantity}</p>
        </div>
      </div>
      <div className="price-info">
        <p className="price">
          <span>Rs. </span>
          {props.price}
        </p>
        <p className="delete">
          {" "}
          <Image src={"/trash-icon.svg"} width={30} height={50} /> DELETE
        </p>
      </div>
      <div className="add-quantity-container">
        <button>-</button>
        <p>{props.amount}</p>
        <button>+</button>
      </div>
    </div>
  );
}
