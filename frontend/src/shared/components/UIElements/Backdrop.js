import React from "react";
import ReactDom from "react-dom";

import styles from "./Backdrop.module.scss";

const Backdrop = props => {
    return ReactDom.createPortal(
        <div className={styles.backdrop} onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')
    );
}

export default Backdrop;