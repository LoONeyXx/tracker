import { useState } from 'react';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';

function DropDownMenuType({ onClick, currentItem, onMenu, isOpen }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handleMenu(e) {
    onMenu(e);
    setIsActiveMenu(prev => !prev);
  }
  function handleItem(e) {
    onClick(e);
    setIsActiveMenu(false);
  }
  return (
    <DropDownMenu
      type="type"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem type="type" text="Модули" onClick={handleItem} />
      <DropMenuItem type="type" text="Курс" onClick={handleItem} />
      <DropMenuItem type="type" text="Уроки" onClick={handleItem} />
    </DropDownMenu>
  );
}
export { DropDownMenuType };
