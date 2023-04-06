import React from "react";
import eagle from "@assets/eagle_sunset2.jpg";

export const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export const contentStyle: React.CSSProperties = {
  background: `url(${eagle})`,
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const vantaStyle: React.CSSProperties = {
  aspectRatio: "auto 3 / 1",
};

export const contentTitleStyle: React.CSSProperties = {
  position: "absolute",
};
