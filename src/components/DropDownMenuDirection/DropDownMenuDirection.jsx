import { useEffect, useState } from 'react';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';

function DropDownMenuDirection({ onClick, currentItem }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handleMenu(e) {
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
      isActiveMenu={isActiveMenu}
    >
      <DropMenuItem
        type="direction"
        text="UX-исследования"
        onClick={handleItem}
      />
      <DropMenuItem type="direction" text="UI-дизайн" onClick={handleItem} />
      <DropMenuItem type="direction" text="Инструменты" onClick={handleItem} />
      <DropMenuItem
        type="direction"
        text="Коммуникация "
        onClick={handleItem}
      />
      <DropMenuItem
        type="direction"
        text="Про-активность"
        onClick={handleItem}
      />
      <DropMenuItem
        type="direction"
        text="Пипл менеджмент"
        onClick={handleItem}
      />
      <DropMenuItem
        type="direction"
        text=" Автономность"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}
export { DropDownMenuDirection };
