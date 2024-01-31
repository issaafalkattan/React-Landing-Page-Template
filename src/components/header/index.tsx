import "./index.scss";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <img src="/logo.jpg" width={30} height={30} alt="ccai logo" />
        <div className="left">草船科技</div>
      </div>
    </header>
  );
}
