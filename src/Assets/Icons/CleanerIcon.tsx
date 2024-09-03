import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CleanerIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#E4F1FA"
      d="M1.952 8.96a1.2 1.2 0 0 0 0 1.698l3.394 3.393a1.2 1.2 0 0 0 1.696 0l1.77-1.77a3.251 3.251 0 0 1 .146-1.276l-.563.563-3.96-3.96 5.091-5.091a.4.4 0 0 1 .566 0l3.394 3.394a.4.4 0 0 1 0 .566l-2.48 2.48a3.198 3.198 0 0 1 1.276-.145l1.77-1.77a1.2 1.2 0 0 0 0-1.696L10.657 1.95a1.201 1.201 0 0 0-1.698 0L1.952 8.96Zm.565 1.132a.4.4 0 0 1 0-.566l1.352-1.352 3.96 3.96-1.352 1.352a.4.4 0 0 1-.566 0l-3.394-3.394ZM12 14.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
    />
  </Svg>
);
export default CleanerIcon;
