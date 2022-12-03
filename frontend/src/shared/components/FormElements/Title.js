import React from "react";
import { Link } from "react-router-dom";

import styles from "./Title.module.scss"

const Title = props => {

    const titleSizeClassName = props.size ? 
                            (props.size === 'small' ? 
                                styles.title__small
                                : props.size === 'large' ? 
                                    styles.title__large
                                    : styles.title__default) 
                            : styles.title__default;

    if(props.to){
        return (
            <h1 className={`${styles.title} ${styles.title__anchor} ${titleSizeClassName} ${props.inverse && styles.title__inverse} ${props.danger && styles.title__danger}`}
            onClick={props.onClick}>
                <Link to={props.to} className={styles.link}>
                    {props.children}
                </Link>
            </h1>
        );
    }
    return (
        <h1 className={`${styles.title} ${titleSizeClassName} ${props.inverse && styles.title__inverse} ${props.danger && styles.title__danger}`}
            onClick={props.onClick}>
            {props.children}
        </h1>
    );
}

export default Title;