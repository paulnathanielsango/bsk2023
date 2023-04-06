import { css } from "@emotion/css";
import { Layout } from "antd";
const { Header } = Layout;
import { TbBrandTiktok } from "react-icons/tb";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";

export default function header() {
  return (
    <Header
      className={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 172px;
        position: relative;
        background: black;
        color: white;
      `}
    >
      <div>
        <h2>BAGSAKAN SA KADAYAWAN 2023</h2>
      </div>
      <div
        className={css`
          display: flex;
          gap: 11px;
        `}
      >
        <RiFacebookBoxFill size={32} />
        <RxInstagramLogo size={32} />
        <RxTwitterLogo size={32} />
        <TbBrandTiktok size={32} />
      </div>

      <div
        className={css`
          gap: 7px;
        `}
      >
        <h2>TICKETS HERE!</h2>
      </div>
    </Header>
  );
}
