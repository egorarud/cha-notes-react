import styles from "./Header.module.scss";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerNav}>
          <li>
            <NavLink to="/">
              <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/profile">my collection</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;