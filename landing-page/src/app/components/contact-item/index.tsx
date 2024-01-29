import Image from "next/image";
import "./index.scss";

export default function ContactItem(props: { icon: string; desc: string[] }) {
  const { icon, desc } = props;
  return (
    <div className="contact-item">
      <div className="left">
        <Image src={icon} width={20} height={20} alt="address" />
      </div>
      <div className="right">
        {desc.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}
