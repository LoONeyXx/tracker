import React, { useEffect, useRef, useState } from 'react';
import './DropDownMenu.sass';
import arrowImg from '../../Images/arrow_down.svg';

function DropDownMenu({
  children,
  isActiveMenu,
  activeItem,
  onClick,
  type,
  place = null,
}) {
  return (
    <div
      className={`dropdown ${
        isActiveMenu && 'dropdown_active'
      } dropdown_place_${place}`}
    >
      <button
        id={type}
        onClick={onClick}
        type="button"
        className="dropdown__button"
      >
        <h5 className="dropdown__title">{activeItem}</h5>
        <div
          style={{
            backgroundImage: `url(${arrowImg})`,
          }}
          className="dropdown__arrow"
        />
      </button>
      <ul className={`dropdown-list dropdown-list_active`}>{children}</ul>
    </div>
  );
}
export { DropDownMenu };
