function DropMenuItem({ onClick, text = 'Тип', type, place = null }) {
  return (
    <li
      type={type}
      id={text}
      onClick={onClick}
      className={`dropdown__item dropdown__item_place_${place}`}
    >
      {' '}
      <h5 className="dropdown__title">{text}</h5>
    </li>
  );
}
export { DropMenuItem };
