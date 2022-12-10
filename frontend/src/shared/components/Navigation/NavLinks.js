import React from "react";
import Title from "../FormElements/Title";

import styles from "./NavLinks.module.scss";

const NavLinks = props => {
    
    return (
    <ul className={props.orientation ? 
                    (props.orientation === 'landscape' ? styles.navList__landscape : styles.navList__portrait) 
                    : styles.navList__portrait }
        id='navList'>
        <li>
            <Title size='small' to="/users" exact='true'>Users</Title>
        </li>
        <li>
            <Title size='small' to={`/users/${props.userId}/places`}>My Places</Title>
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