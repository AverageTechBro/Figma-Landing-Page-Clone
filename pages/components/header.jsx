export default function Header(props) {
  return (
    <div className="header-container">
      <p className="lowest-price" style={{ color: props.secondColor }}>
        <span style={{ color: props.firstColor }}>{props.title}</span>{" "}
        {props.titleII}{" "}
      </p>
    </div>
  );
}
