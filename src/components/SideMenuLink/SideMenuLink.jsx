import { Link } from 'react-router-dom';
import './SideMenuLink.sass';

function SideMenuLink({ path, textContent, icon, isActive, onClick = null }) {
  return (
    <Link
      className={`side-menu__link ${isActive && 'side-menu__link_active'}`}
      to={path}
      onClick={onClick}
    >
      <div
        className="side-menu__link-image"
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <p className="side-menu__link-text">{textContent}</p>
    </Link>
  );
}

export { SideMenuLink };
