import React from "react";
import { Link } from "react-router-dom";
import Title from "../FormElements/Title";
import Backdrop from "../UIElements/Backdrop";
import Header from "./Header";

import styles from "./Nav.module.scss"
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const Nav = () => {
    const INIT_DRAWER_STATE = false;

    const [drawerIsOpen, setDrawerIsOpen] = React.useState(INIT_DRAWER_STATE);

    const openDrawerHandler = () => {
        setDrawerIsOpen(value => true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(value => false);
    }

    return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav id='sideNav'>
                <div><h1>Menu</h1></div>
                <NavLinks />
            </nav>
        </SideDrawer>
        <Header>
            <button onClick={openDrawerHandler} className={styles.mainNav__menuBtn}>
                <i className="fa fa-bars"></i>
            </button>
            <Title to='/' size='large'>
                MERN Project
            </Title>
            <nav className={styles.mainNav__nav}>
                <NavLinks userId='1'/>
            </nav>
        </Header>
    </React.Fragment>
    );
}

export default Nav;