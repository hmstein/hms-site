import { FaDiceD20 } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaDiceD20 size={25} />} />
      <SideBarIcon icon={<HiAtSymbol size={25} />} />
    </div>
  );
};

const SideBarIcon = (props: Props) => {
  return <div className="sidebar-icon">{props.icon}</div>;
};

type Props = {
  icon: JSX.Element;
};

export default SideBar;
