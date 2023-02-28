import Link from "next/link";
import Header from "./header";
import Image from "next/image";
export default function SectionShop() {
  return (
    <div className="main-sectioned-shop-container">
      <Header
        firstColor={"#AE3027"}
        secondColor={"#3E3E3E"}
        title={"Lowest Prices"}
        titleII={"On Pre Sales!"}
      />
      <div className="section-shop-container">
        <div className="left-side">
          <div className="left-big-side">
            <Link href="/s">
              <Image src={"/bpt-big-phone.svg"} width={550} height={400} />
            </Link>
          </div>
          <div className="left-small-side">
            <Link href="/s">
              <Image src={"/bpt-small-laptop.svg"} width={370} height={200} />
            </Link>
            <Link href="/s">
              <Image src={"/bpt-small-perfume.svg"} width={370} height={200} />
            </Link>
          </div>
        </div>
        <div className="left-side">
          <div className="left-big-side">
            <Link href="/s">
              <Image src={"/bpt-big-phone.svg"} width={550} height={400} />
            </Link>
          </div>
          <div className="left-small-side">
            <Link href="/s">
              <Image src={"/bpt-small-laptop.svg"} width={370} height={200} />
            </Link>
            <Link href="/s">
              <Image src={"/bpt-small-laptop.svg"} width={370} height={200} />
            </Link>
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
}
