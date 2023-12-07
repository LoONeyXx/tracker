import { Link, useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import backgroundImage from '../../images/authorizationBackground.jpg';
import './Authorization.sass';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout } from '../../store/userSlice';
import { signup } from '../../store/userSlice';

function Authorization({ submitText }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  function handleSubmit() {
    // dispatch(
    //   signup({
    //     email: 'looneyxx2@yandex.ru',
    //     password: 'Crosshair',
    //     username: 'Sergey',
    //   }),
    // );
    dispatch(loginUser());
    navigate('/diary/desk');
    localStorage.setItem('isLogged', 'true');
  }

  return (
    <main className="content content_authorization">
      <section className="authorization">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="backgroundBlock"
        />
        <AuthForm submitText={submitText} onSubmit={handleSubmit} />
        {submitText === 'Регистрация' ? (
          <p className="authorization__footer">
            Уже зарегистрированы?
            <Link to="/signin" className="authorization__footer-link">
              Войти
            </Link>
          </p>
        ) : (
          <p className="authorization__footer">
            Новый пользователь?
            <Link to="/signup" className="authorization__footer-link">
              Зарегистрироваться
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}

export { Authorization };
