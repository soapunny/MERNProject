import React from "react";
import { Link } from "react-router-dom";

import styles from "./Image.module.scss"

const Image = props => {

    if(props.to){
        return (
            <Link to={props.to} className={styles.imageLink}>
                <img src={props.src} alt={props.alt} onClick={props.onClick} className={styles.image}/>
            </Link>
        );
    }

    return (
        <img src={props.src} alt={props.alt} onClick={props.onClick} className={styles.image} />
    );
}

export default Image;