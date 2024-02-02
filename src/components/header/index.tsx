import "./index.scss";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <img src="/logo.png" width={50} height={50} alt="ccai logo" />
        <div className="left">草船科技</div>
      </div>
    </header>
  );
}
