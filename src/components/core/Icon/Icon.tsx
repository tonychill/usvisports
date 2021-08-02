import { FC } from "react";
import MainLogo from "./svgs/sport.svg";
import Image from "next/image";

export interface IconProps {
  icon: string;
}

const Icon: FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case "main-logo":
      return (
        <Image
          src={MainLogo}
          className="object-cover object-center transition duration-300 ease-out transform scale-100 group-hover:scale-105"
          layout="fill"
          alt="USVI Sports Commission logo."
        />
      );
    default:
      return <span>logo missing!</span>;
  }
};

export default Icon;
// const Icon: FC<IconProps> = ({ icon }) => {
//   switch (icon) {
//     case "main-logo":
//       return (
//         <Image
//           src={MainLogo}
//           className="object-cover object-center transition duration-300 ease-out transform scale-100 group-hover:scale-105"
//           layout="fill"
//           alt="USVI Sports Commission logo."
//         />
//       );
//     default:
//       return <span>logo missing!</span>;
//   }
// };

// export default Icon;
