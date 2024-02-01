import "./index.scss";
export default function ServiceItem(props: {
  name: string;
  img: string;
  desc: string;
  border?: boolean;
}) {
  const { name, img = "", desc, border = true } = props;
  return (
    <div className="service-item">
      <img
        src={img}
        alt="service"
        className={border ? "border" : "no-border"}
      />
      <div className="service-name">{name}</div>
      <div className="service-desc">{desc}</div>
    </div>
  );
}
