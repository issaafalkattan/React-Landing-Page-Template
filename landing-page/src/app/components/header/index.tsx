"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./index.scss";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 获取页面滚动位置
      const scrollPosition = window.scrollY;
      if (scrollPosition) {
        headerRef.current.style.transform = `translateY(-100%)`;
      } else {
        headerRef.current.style.transform = `translateY(0)`;
      }
      const mainPart = document.querySelector(".main-part");
      if (mainPart) {
        mainPart.style.opacity = scrollPosition / 1000 / 1;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="top-bar">
        <div className="left">草船科技</div>
        <div className="right">
          <Image src="/logo.jpg" width={30} height={30} alt="ccai logo" />
        </div>
      </div>
    </header>
  );
}
