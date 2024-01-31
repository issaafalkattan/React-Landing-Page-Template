import "./index.scss";
export default function ServiceItem(props: {
  name: string;
  img: string;
  desc: string;
}) {
  const { name, img = "", desc } = props;
  return (
    <div className="service-item">
      <img src={img} alt="service" />
      <div className="service-name">{name}</div>
      <div className="service-desc">{desc}</div>
    </div>
  );
}
