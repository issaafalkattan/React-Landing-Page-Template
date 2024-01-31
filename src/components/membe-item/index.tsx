import "./index.scss";
export default function MemberItem(props: { name: string; desc: string }) {
  return (
    <div className="member-item">
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="desc">{props.desc}</div>
      </div>
    </div>
  );
}
