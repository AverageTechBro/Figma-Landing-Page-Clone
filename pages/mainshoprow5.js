import MainShop from "./mainshop";
export default function MainShopRow5(props) {
  return (
    <div className="mainshop-row-container">
      <div className="home-mainshop-container">
        <MainShop
          discount={props.discount1}
          thumbnail={props.thumbnail1}
          detials={
            "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
          }
          realPrice={"2,20,000"}
          initialPrice={"2,30,000"}
        />
        <MainShop
          discount={props.discount2}
          thumbnail={props.thumbnail2}
          detials={
            "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
          }
          realPrice={"2,20,000"}
          initialPrice={"2,30,000"}
        />
        <MainShop
          discount={props.discount3}
          thumbnail={props.thumbnail3}
          detials={
            "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
          }
          realPrice={"2,20,000"}
          initialPrice={"2,30,000"}
        />
        <MainShop
          discount={props.discount4}
          thumbnail={props.thumbnail4}
          detials={
            "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
          }
          realPrice={"2,20,000"}
          initialPrice={"2,30,000"}
        />
        <MainShop
          discount={props.discount5}
          thumbnail={props.thumbnail5}
          detials={
            "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM)"
          }
          realPrice={"2,20,000"}
          initialPrice={"2,30,000"}
        />
      </div>
    </div>
  );
}
