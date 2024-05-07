import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const fadeIn2 = keyframes`
from {opacity: 0; transform: translateY(-20px)}
to {opacity: 1;}
`;

export const fadeInForProjName = keyframes`
from {opacity: 0; transform: translate(-50%,-20px)}
to {opacity: 1; transform: translate(-50%,0px)}
`;

export const fadeOut = keyframes`
from {opacity:1;} 
to {opacity:0; display:none;}
`;

export const fadeOut2 = keyframes`
0%, 50% {opacity:1;} 
100% {opacity:0; display:none;}
`;

export const firstCoverFadeOut = keyframes`
0%{width: 20vw; opacity: 1;}
30%{width: 180px; height: 180px; border-radius: 50%;}
100% {
  width: 0;
  height: 0;
  border-radius: 50%;
  opacity: 0;
  display: none;
}
`;

export const xToMinus50vw = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-50vw);
}
`;

export const xTo50vw = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(50vw);
}
`;

export const turnLeft = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(0);
}
50% {
  transform: translate(-50%, -50%) rotate(-540deg);
  width: 220px;
  height: 220px;
}
99%{opacity: 1;}
100% {
  transform: translate(-50%, -50%) rotate(-540deg);
  width: 190px;
  height: 190px;
  opacity: 0;
  display: none;
}
`;

export const turnRight = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(0);
}
50% {
  transform: translate(-50%, -50%) rotate(540deg);
  width: 160px;
  height: 160px;
}
99%{opacity: 1;}
100% {
  transform: translate(-50%, -50%) rotate(540deg);
  width: 130px;
  height: 130px;
  opacity: 0;
  display: none;
}
`;

export const moveLeft = keyframes`
  to {left: 0;}
`;

export const moveRight = keyframes`
  to {right: 0;}
`;

export const showUp = keyframes`
from {transform: translateY(-15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const showUp2 = keyframes`
from {transform: translateY(15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const widthZeroToFull = keyframes`
from {width: 0; opacity:0;}
to {width: 100%; opacity:1;}
`;

export const leftToRight = keyframes`
0% {left: 0; opacity: 0;}
10%,80%{ opacity: 1;}
100% {left: 80%; opacity: 0;}
`;

export const floating = keyframes`
from {transform: translateY(0px) scale(1);}
to {transform: translateY(10px) scale(0.9);}
`;

export const widthHeightZeroTo40 = keyframes`
from {width: 0; height: 0;}
to {width: 40px; height: 40px; overflow: visible;}
`;

export const heightZeroTo200 = keyframes`
from {height: 0;}
to {height: 200px;}
`;

export const height200ToZero = keyframes`
from {height: 200px;}
to {height: 0;}
`;
