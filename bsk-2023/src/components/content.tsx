import { Layout } from "antd";
const { Content } = Layout;

import { css } from "@emotion/css";
import { Particles } from "./vanta";
import eagle from "@assets/eagle_sunset2.jpg";
import festmap from "@assets/music_fest.png";
import perks from "@assets/ticket-perks.jpg";
import prices from "@assets/ticket-prices.jpg";
import clubs from "@assets/eagles-trio.jpg";

export default function content() {
  return (
    <div
      className={css`
        color: white;
        background-color: black;
      `}
    >
      <Content
        className={css`
          background: url(${eagle});
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
        `}
      >
        <div
          className={css`
            display: flex;
            width: 100%;
            position: absolute;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            z-index: 1;
          `}
        >
          <h2>DAVAO</h2>
          <span>Parokya ni Edgar | Kamikazee | Gloc 9</span>
        </div>

        <Particles />
      </Content>

      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 40px;
        `}
      >
        <h2>Crocodile Park</h2>
        <img
          className={css`
            height: 400px;
            border-radius: 25px;
            background-repeat: no-repeat;
            background-size: contain;
          `}
          src={festmap}
        />
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          padding: 40px 40px 60px;
        `}
      >
        <img
          className={css`
            height: 300px;
            border-radius: 25px;
            background-repeat: no-repeat;
            background-size: contain;
          `}
          src={prices}
        />

        <img
          className={css`
            height: 300px;
            border-radius: 25px;
            background-repeat: no-repeat;
            background-size: contain;
            padding: 0 20px;
          `}
          src={perks}
        />
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 40px;
        `}
      >
        <h2>SPONSORS AND PARTNERS</h2>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 40px;
          `}
        >
          <h2>Company 1</h2>
          <h2>Company 2</h2>
          <h2>Company 3</h2>
          <h2>Company 4</h2>
        </div>
        
      </div>
    </div>
  );
}
