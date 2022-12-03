import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss"

const Button = props => {

    const btnSizeClassName = props.size ? 
                            (props.size === 'small' ? 
                                styles.button__small 
                                : props.size === 'large' ? 
                                    styles.button__large
                                    : styles.button__default) 
                            : styles.button__default;

    //a tag button
    if(props.href){
        return (
            <a className={`${styles.button} 
                            ${btnSizeClassName} 
                            ${props.inverse && styles.button__inverse} 
                            ${props.danger && styles.button__danger} 
                            ${props.fit && styles.button__fit}
                            ${props.space && styles.button__space}`}
            href={props.href}>
                {props.children}
            </a>
        );
    }

    //Link button
    if(props.to){  
        return (
            <Link 
                className={`${styles.button} 
                ${btnSizeClassName} 
                ${props.inverse && styles.button__inverse} 
                ${props.danger && styles.button__danger} 
                ${props.fit && styles.button__fit}
                ${props.space && styles.button__space}`}
                to={props.to}
                exact={props.exact}>
                {props.children}
            </Link>
        );
    }
    
    //button with onClick event.
    return (
        <button className={`${styles.button} 
            ${btnSizeClassName} 
            ${props.inverse && styles.button__inverse} 
            ${props.danger && styles.button__danger} 
            ${props.fit && styles.button__fit}
            ${props.space && styles.button__space}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}>
            {props.children}
        </button>
    );
}

export default Button;