import React from 'react';
import './NotificationForm.sass';
import { DropDownMenuProfession } from '../DropDownMenuProfession/DropDownMenuProfession';
import { useDispatch, useSelector } from 'react-redux';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { openTargetMenu, changeValue } from '../../store/changeTargetSlice';
import { Button } from '../Button/Button';

function NotificationForm({ onCancel, onSubmit }) {
  const { values, openedMenus } = useSelector(state => state.changeTarget);
  const dispatch = useDispatch();
  function handleSubmit() {
    onSubmit(values);
  }
  function handleClick() {
    console.log(values);
  }
  function handleMenu(e) {
    const id = e.currentTarget.id;
    dispatch(openTargetMenu(id));
  }
  function handleReset() {
    dispatch(resetFilters());
  }
  function handleChangeValue(e) {
    const { id, type } = e.currentTarget;
    dispatch(changeValue({ id, type }));
  }
  return (
    <form className="notification-form" action="#">
      <h3 className="">Выбор профессиональной цели</h3>
      <div className="notification-form__input-zone">
        <div className="notification-form__label">
          Выбор профессии
          <DropDownMenuProfession
            place="notification"
            onMenu={handleMenu}
            onClick={handleChangeValue}
            isOpen={openedMenus.profession}
            currentItem={values.profession}
          />
        </div>
        <div className="notification-form__label">
          Выбор грейда/квалификацию
          <DropDownMenuDifficult
            place="notification"
            onMenu={handleMenu}
            onClick={handleChangeValue}
            isOpen={openedMenus.difficult}
            currentItem={values.difficult}
          />
        </div>
      </div>
      <div className="notification-form__button-zone">
        <Button place="notification" textButton="Отмена" onClick={onCancel} />
        <Button
          place="content"
          textButton="Выбрать цель"
          modification="notification"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
export default NotificationForm;
