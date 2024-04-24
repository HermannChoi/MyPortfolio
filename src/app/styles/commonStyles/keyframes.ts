import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const fadeOut = keyframes`
from {opacity:1;} 
to {opacity:0; display:none;}
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
100% {
  transform: translate(-50%, -50%) rotate(-540deg);
  width: 190px;
  height: 190px;
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
100% {
  transform: translate(-50%, -50%) rotate(540deg);
  width: 130px;
  height: 130px;
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
