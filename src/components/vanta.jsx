import { css } from "@emotion/css";
import React from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as T3 from "three";

export const Particles = () => {
  const vantaRef = React.useRef();
  const [vantaEffect, setVantaEffect] = React.useState();

  React.useEffect(() => {
    if (vantaRef.current && vantaRef.current.children.length < 1) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: T3,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          birdSize: 0.50,
          scaleMobile: 1.00,
          backgroundAlpha: 0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={css`
        aspect-ratio: auto 3 / 1;
      `} ref={vantaRef} width={window.innerWidth} height="800px">
    </div>
  );
};
