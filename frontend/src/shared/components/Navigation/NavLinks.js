import React from "react";
import { Link } from "react-router-dom";
import Title from "../FormElements/Title";

import styles from "./NavLinks.module.scss";

const NavLinks = ({userId}) => {

    return (
    <ul className={styles.navList} id='navList'>
        <li>
            <Title size='small' to="/users" exact='true'>Users</Title>
        </li>
        <li>
            <Title size='small' to={`/users/${userId}/places`}>My Places</Title>
        </li>
        <li>
            <Title size='small' to="/places/new">Add Places</Title>
        </li>
        <li>
            <Title size='small' to="/auth">Login</Title>
        </li>
    </ul>
    );
}

export default NavLinks;