import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavLinks.module.scss";

const NavLinks = ({userId}) => {

    const clickNavLinkHandler = (evt) => {
        const Links = document.querySelectorAll('#navList li a');
        Links.forEach(link => {
            console.log(link);
            link.classList.remove(styles.active);
        });
        evt.target.classList.add(styles.active);
    }

    return (
    <ul className={styles.navList} id='navList'>
        <li>
            <Link onClick={clickNavLinkHandler} to="/users" exact='true'>Users</Link>
        </li>
        <li>
            <Link onClick={clickNavLinkHandler} to={`/users/${userId}/places`}>My Places</Link>
        </li>
        <li>
            <Link onClick={clickNavLinkHandler} to="/places/new">Add Places</Link>
        </li>
        <li>
            <Link onClick={clickNavLinkHandler} to="/auth">Login</Link>
        </li>
    </ul>
    );
}

export default NavLinks;