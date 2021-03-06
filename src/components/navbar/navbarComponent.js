import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './navbar-styles.module.scss';
import { ReactComponent as CloseMenu } from '../../assets/icons/x-mark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import classNames from 'classnames';
import AuthIcon from '../../assets/icons/AuthIcon';
import UserIcon from '../../assets/icons/UserIcon';

const Navbar = ({ auth, logout }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const openMenu = () => {
    setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    logout();
    closeMenu();
    setRedirect(true);
  };

  const iconColor = '#44a1a0';

  const renderRight = () => {
    const { user, isAuthenticated } = auth;

    if (isAuthenticated) {
      return (
        <div
          className={classNames(styles.navButtons, {
            [styles.active]: mobileMenu,
          })}
        >
          {user.therapistId ? (
            <Link
              to={`/therapist-home/${user.therapistId}`}
              className={styles.navButton}
              onClick={closeMenu}
            >
              <UserIcon className={styles.navIcon} fill={iconColor} />
              Therapist Page
            </Link>
          ) : (
            <Link
              to="/therapist-form"
              className={styles.navButton}
              onClick={closeMenu}
            >
              <UserIcon className={styles.navIcon} fill={iconColor} />
              Become A Therapist
            </Link>
          )}

          <a className={styles.navButton} onClick={onLogoutClick} href="fasd">
            <AuthIcon className={styles.navIcon} fill={iconColor} />
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div
          className={classNames(styles.navButtons, {
            [styles.active]: mobileMenu,
          })}
        >
          <Link to="/login" className={styles.navButton} onClick={closeMenu}>
            <AuthIcon className={styles.navIcon} fill={iconColor} />
            Login
          </Link>
        </div>
      );
    }
  };

  return (
    <section className={styles.navbar}>
      <nav>
        <Link to="/" className={styles.title} onClick={closeMenu}>
          Leaf
        </Link>

        {renderRight()}

        <div
          className={styles.mobileMenuIcon}
          onClick={mobileMenu ? closeMenu : openMenu}
        >
          {mobileMenu ? (
            <CloseMenu className={styles.menuIcon} />
          ) : (
            <MenuIcon className={styles.menuIcon} />
          )}
        </div>
      </nav>
      {redirect && <Redirect to={`/login`} />}
    </section>
  );
};

export default Navbar;
