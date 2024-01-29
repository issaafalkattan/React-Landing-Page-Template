import Image from "next/image";
import "./page.scss";
import ServiceItem from "./components/service-item";
import data from "./data.json";
import Header from "./components/header";
import ContactItem from "./components/contact-item";
import MemberItem from "./components/membe-item";

export const metadata = {
  title: "草船科技—工业人工智能先行者",
};

export default function Home() {
  return (
    <main className="main">
      <Header />
      <section className="main-part">
        <div className="left">
          <Image
            src={"/intro-bg.jpg"}
            width={500}
            height={500}
            objectFit="cover"
            alt="ccai into"
          />
        </div>
        <div className="right">
          <div className="title">This is CC.AI</div>
          <div className="slogan">为中国40万家工业企业落地人工智能解决方案</div>
        </div>
      </section>
      <section className="service">
        <h1>Our Service</h1>
        <div>
          专注人工智能在制造业的落地，最快4周交付，已在仪器仪表、汽配零件、暖通空调、产线防呆防错等垂直领域有成熟解决方案。
        </div>
        <div className="service-list">
          {data.sevice.map((item) => (
            <ServiceItem {...item} />
          ))}
        </div>
      </section>
      <section className="team">
        <div className="top-left">
          <h1>Our Team.</h1>
          <div className="desc">
            草船科技(CC.AI)成立于2021年12月，由前Facebook机器学习工程团队创建，核心成员来自Facebook,
            字节跳动, 阿里巴巴, 华为, 菲尼克斯电气, 斯坦福大学, 哥伦比亚大学,
            南京大学等。天使轮融资百万美金，投资方包括多家一线风投机构。目前办公在宁波高新区，靠近客户现场，2022年底完成A轮数百万美金融资并在上海设立研发中心。
          </div>
        </div>
        <div className="team-member-list">
          {data.members.map((item) => (
            <MemberItem {...item} />
          ))}
        </div>
      </section>
      <section className="partner">
        <h1 className="left">Working With the Best Clients and Partners</h1>
        <div className="partner-imgs">
          {data.partners.map((item) => (
            <Image
              className={`partner-img ${item.bgc}`}
              width={204}
              height={204}
              src={item.img}
              alt={item.img}
            />
          ))}
        </div>
      </section>

      <section className="contact">
        {data.contacts.map((item) => (
          <ContactItem {...item} />
        ))}
      </section>
      <div className="icon"></div>
      <footer>
        <span>Copyright@2021-2024 </span>
        <span>宁波草船科技有限公司 </span>
        <span>浙ICP备2022014290号-1</span>
      </footer>
    </main>
  );
}
