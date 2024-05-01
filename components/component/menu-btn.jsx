import { Menu, ListCollapse } from "lucide-react";

const MenuBtn = ({ handleMenu, menuState }) => {
  return (
    <div onClick={handleMenu} className="sm:hidden">
      {!menuState ? <Menu size={60} /> : <ListCollapse size={60} />}
    </div>
  );
};

export default MenuBtn;
