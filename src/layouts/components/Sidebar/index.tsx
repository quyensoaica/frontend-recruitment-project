import MenuBar from "./MenuBar";

interface ISidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: ISidebarProps): JSX.Element => {
  return (
    <div>
      <MenuBar collapsed={collapsed} />
    </div>
  );
};
export default Sidebar;
