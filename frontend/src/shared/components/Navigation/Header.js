
import React from "react";

import styles from "./Header.module.scss";

const Header = props => {

    return (
    <header>{props.children}</header>
    );
};

export default Header;