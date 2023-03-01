import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h3>Dashboard</h3>
      <p>
        <Image
          className="dash-image"
          src={"/shopping-bag.svg"}
          width={30}
          height={30}
        />{" "}
        My Orders
        <span>(0)</span>
      </p>
      <p>
        <Image
          className="dash-image"
          src={"/phonebook.svg"}
          width={30}
          height={30}
        />{" "}
        Adress Book
        <span>(0)</span>
      </p>
      <p>
        <Image
          className="dash-image"
          src={"/cash.svg"}
          width={30}
          height={30}
        />{" "}
        My Payment Options
        <span>(0)</span>
      </p>
      <p>
        <Image
          className="dash-image"
          src={"/u-turn.svg"}
          width={30}
          height={30}
        />{" "}
        My Returns
        <span>(0)</span>
      </p>
    </div>
  );
}
