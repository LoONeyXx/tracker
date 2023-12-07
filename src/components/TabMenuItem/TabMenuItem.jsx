import './TabMenuItem.sass';

function TabMenuItem({ isActive, isDisabled, text }) {
  return (
    <li
      className={`tab-menu__item ${isActive && 'tab-menu__item_active'} ${
        isDisabled && 'tab-menu__item_disabled'
      }`}
    >
      {text}
    </li>
  );
}
export { TabMenuItem };
