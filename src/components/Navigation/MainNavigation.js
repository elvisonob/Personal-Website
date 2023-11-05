import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import BackDrop from '../UIElements/BackDrop';
import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes['main-navigation__drawer-nav']}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className={classes['main-navigation__menu-btn']}
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes['main-navigation__title']}>
          <Link to="/">ELVIS-Tech</Link>
        </h1>
        <nav className={classes['main-navigation__header-nav']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
