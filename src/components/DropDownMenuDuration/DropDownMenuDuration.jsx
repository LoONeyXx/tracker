import React, { useState } from 'react';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuDuration({ onClick, currentItem, onMenu, isOpen }) {
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
      activeItem={currentItem}
      onClick={handleMenu}
      type="duration"
      isActiveMenu={isOpen}
    >
      <DropMenuItem type="duration" text="5-10 минут" onClick={handleItem} />
      <DropMenuItem type="duration" text="20-40 минут" onClick={handleItem} />
      <DropMenuItem
        type="duration"
        text="больше 60 миинут"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}
export { DropDownMenuDuration };
