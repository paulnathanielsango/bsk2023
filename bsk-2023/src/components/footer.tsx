import { Layout } from "antd";
const { Footer } = Layout;
import { css } from "@emotion/css";
import clubs from "@assets/eagles-trio.jpg";

export default function footer() {
  return (
    <Footer
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        background-color: black;
        padding: 40px;
      `}
    >
      <h2>PROUDLY PRESENTS</h2>
      <img
        className={css`
          height: 200px;
          background-repeat: no-repeat;
          background-size: contain;
          padding: 0 20px;
        `}
        src={clubs}
      />
      <h5>&copy; Zly Studios 2023</h5>
    </Footer>
  );
}
