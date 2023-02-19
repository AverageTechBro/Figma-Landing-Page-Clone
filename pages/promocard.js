export default function PromoCard(props) {
  return (
    <div className="promotion-card-container">
      <p style={{ color: props.secondColor }}>
        <span style={{ color: props.firstColor }}>{props.title}</span>{" "}
        {props.titleII}{" "}
      </p>

      <div className="card-container">
        <img
          className="promotion-card-image"
          src="https://media.discordapp.net/attachments/1075680327718141992/1075760248964534293/image_1131.png"
          alt=""
        />
        <div className="card-text-container">
          <h1>
            Pre-Order <span>SALE</span>
          </h1>
          <p>
            Up to <span>65% OFF</span>{" "}
          </p>
          <button className="promo-shop-button">
            SHOP NOW{" "}
            <span>
              <img
                src="https://media.discordapp.net/attachments/1075680327718141992/1075685739037212725/Icon_Stroke.png"
                alt=""
              />
            </span>
          </button>
        </div>
        <img
          className="promotion-card-imageII"
          src="https://media.discordapp.net/attachments/1075680327718141992/1075760248654143528/XCHk-Lenovo-Legion-5-15-keyboard-1024x630-removebg-preview_2.png"
          alt=""
        />
      </div>
    </div>
  );
}
