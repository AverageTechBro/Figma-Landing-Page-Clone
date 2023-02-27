import Image from "next/image";
export default function Stats() {
  return (
    <div className="stats-container">
      <div className="main-stats-container">
        <div className="content-container">
          <Image src="/stats-calender.svg" width={100} height={100} />
          <p>
            Years <br />
            <span>4+</span>
          </p>
        </div>
        <div className="line-border"></div>
      </div>
      <div className="main-stats-container">
        <div className="content-container">
          <Image src="/stats-people.svg" width={100} height={100} />

          <p>
            Happy Customers <br />
            <span>500+</span>
          </p>
        </div>
        <div className="line-border"></div>
      </div>
      <div className="main-stats-container">
        <div className="content-container">
          <Image src="/stats-thumbs.svg" width={100} height={100} />

          <p>
            Quality Checked <br />
            <span>99%</span>
          </p>
        </div>
        <div className="line-border"></div>
      </div>
      <div className="main-stats-container">
        <div className="content-container">
          <Image src="/stats-computer.svg" width={100} height={100} />
          <p>Best Service</p>
        </div>
      </div>
    </div>
  );
}
