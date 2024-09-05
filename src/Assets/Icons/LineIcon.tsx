import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LineIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1}
    height={30}
    fill="none"
    {...props}
  >
    <Path stroke="#5A5A5A" d="M.5 0v30" />
  </Svg>
);
export default LineIcon;
