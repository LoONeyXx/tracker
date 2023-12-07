import React, { useState } from 'react';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuPrice({ onClick, currentItem, onMenu, isOpen }) {
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
      type="price"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem type="price" text="Бесплатно" onClick={handleItem} />
      <DropMenuItem type="price" text="> 1000 рублей" onClick={handleItem} />
      <DropMenuItem type="price" text="< 1000 рублей" onClick={handleItem} />
    </DropDownMenu>
  );
}
export { DropDownMenuPrice };
