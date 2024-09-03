import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const QuestionIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <G clipPath="url(#b)">
        <Rect width={18} height={18} x={5} y={4} fill="#51A2E0" rx={9} />
        <Path
          fill="#F9F9F9"
          d="M13.568 15.074v-.588c0-.448.084-.812.252-1.092.178-.28.476-.518.896-.714l.308-.14c.448-.196.798-.42 1.05-.672.252-.252.378-.602.378-1.05 0-.327-.084-.602-.252-.826a1.616 1.616 0 0 0-.686-.518 2.551 2.551 0 0 0-.994-.182c-.373 0-.718.065-1.036.196a1.62 1.62 0 0 0-.742.574c-.186.261-.28.588-.28.98v.392h-1.484v-.392c0-.635.154-1.18.462-1.638a2.964 2.964 0 0 1 1.274-1.036c.532-.243 1.134-.364 1.806-.364.663 0 1.251.121 1.764.364.514.243.915.574 1.204.994.299.42.448.905.448 1.456 0 .541-.102.994-.308 1.358a2.562 2.562 0 0 1-.77.868 5.974 5.974 0 0 1-1.008.574l-.308.14a.824.824 0 0 0-.364.28c-.065.112-.098.28-.098.504v.532h-1.512Zm.784 3.122a1.13 1.13 0 0 1-.812-.322c-.214-.215-.322-.49-.322-.826 0-.336.108-.607.322-.812a1.13 1.13 0 0 1 .812-.322c.336 0 .612.107.826.322.215.205.322.476.322.812 0 .336-.107.611-.322.826-.214.215-.49.322-.826.322Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="b">
        <Rect width={18} height={18} x={5} y={4} fill="#fff" rx={9} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default QuestionIcon;
