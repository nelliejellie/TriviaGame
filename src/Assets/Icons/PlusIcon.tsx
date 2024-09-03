import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#17478B"
      d="M8 1.5A6.508 6.508 0 0 0 1.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5S11.584 1.5 8 1.5Zm0 1c3.043 0 5.5 2.457 5.5 5.5s-2.457 5.5-5.5 5.5A5.492 5.492 0 0 1 2.5 8c0-3.043 2.457-5.5 5.5-5.5ZM7.5 5v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5h-1Z"
    />
  </Svg>
);
export default PlusIcon;
