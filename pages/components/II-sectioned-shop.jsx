import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function IISectionedShop() {
  return (
    <div className="main-II-section-shop-container">
      <Header
        secondColor={"#AE3027"}
        firstColor={"#3E3E3E"}
        title={"Killer"}
        titleII={"Deals"}
      />
      <div className="II-section-shop-container">
        <div className="big-image">
          <Link href="./s">
            <Image src={"/bpt-IIsec-big.svg"} width={770} height={520} />
          </Link>
        </div>
        <div className="small-image">
          <Link href="./s">
            <Image src={"/bpt-IIsec-small.svg"} width={420} height={240} />
          </Link>
          <Link href="./s">
            <Image src={"/bpt-IIsec-small.svg"} width={420} height={240} />
          </Link>
        </div>
        <div className="neindeg-image">
          <Link href="./s">
            <Image src={"/bpt-IIsec-small-90.svg"} width={410} height={520} />
          </Link>
        </div>
      </div>
    </div>
  );
}
