export default function MainShop(props) {
  return (
    <div className="mainshop-container">
      <div className="discount-status">
        <p>{props.discount}</p>
      </div>
      <div className="shop-content">
        <div className="laptop-info">
          <img src={props.thumbnail} alt="" />
          <p>{props.detials}</p>
        </div>
        <div className="metadata-container">
          <div className="left-side">
            <p className="real-price">
              <span>Rs.</span> {props.realPrice}
            </p>
            <p className="previous-price">Rs {props.initialPrice}</p>
            <button>
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075768813750071296/Vector5.png"
                alt=""
              />
              Delivery in, 48hrs
            </button>
          </div>
          <button className="view-detail-button">
            VIEW DETAILS{" "}
            <img
              src="https://media.discordapp.net/attachments/1075680327718141992/1075685687703109673/Vector3.png"
              alt=""
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
