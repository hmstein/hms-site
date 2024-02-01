import { FaDiceD20 } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";

type BarProps = {
  handler: (param: string) => void;
};

const SideBar = (props: BarProps) => {
  return (
    <div className="sidebar">
      <div onClick={() => props.handler("Home")}>
        <SideBarIcon icon={<FaDiceD20 size={25} />} />
      </div>
      <div onClick={() => props.handler("AboutMe")}>
        <SideBarIcon icon={<SiAboutdotme size={25} />} />
      </div>
      <div onClick={() => props.handler("Socials")}>
        <SideBarIcon icon={<HiAtSymbol size={25} />} />
      </div>
    </div>
  );
};

const SideBarIcon = (props: IconProps) => {
  return <div className="sidebar-icon">{props.icon}</div>;
};

type IconProps = {
  icon: JSX.Element;
};

export default SideBar;
