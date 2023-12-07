import { useLocation, useNavigate } from 'react-router-dom';
import { SideMenuLink } from '../SideMenuLink/SideMenuLink';
import { Button } from '../Button/Button';
import arrowIcon from '../../images/arrow-icon.svg';
import vanacyIcon from '../../images/vacancy-icon.svg';
import masterskayaIcon from '../../images/masterskaya-icon.svg';
import dnenvinIcon from '../../images/dnevnik-icon.svg';
import contactIcon from '../../images/contact-icon.svg';
import lentaIcon from '../../images/lenta-icon.svg';
import infoIcon from '../../images/info-icon.svg';
import exitIcon from '../../images/exit-icon.svg';
import './SideMenu.sass';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
function SideMenu() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isDiaryLocation = location.pathname.includes('/diary');
  const isTrackLocation = location.pathname.includes('/track');
  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem('isLogged');
  }
  return (
    <nav className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Трек развития"
            path="/track/profile"
            icon={arrowIcon}
            isActive={isTrackLocation}
          />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Вакансии" path="" icon={vanacyIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Мастерская"
            path=""
            icon={masterskayaIcon}
          />
        </li>
        <div className="side-menu__break-line" />
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Дневник"
            path="/diary/desk"
            icon={dnenvinIcon}
            isActive={isDiaryLocation}
          />
        </li>
        <div className="side-menu__break-line" />
        <li className="side-menu__item">
          <SideMenuLink textContent="Контакты" path="" icon={contactIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Лента" path="" icon={lentaIcon} />
        </li>
      </ul>
      <ul className="side-menu__list">
        <Button place="side-menu" textButton="Оффер принят" />
        <li className="side-menu__item">
          <SideMenuLink textContent="Уйти в отпуск" path="" icon={lentaIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Инфо профиля" path="" icon={infoIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Выход"
            path="/signin"
            icon={exitIcon}
            onClick={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
}

export { SideMenu };
