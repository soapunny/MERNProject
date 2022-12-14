import React from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from "react-transition-group";

import Backdrop from './Backdrop';
import styles from "./Modal.module.scss";

const ModalOverlay = props => {
    const content = (
        <div className={`${styles.modal} ${props.className}`}>
            <div className={`${styles.modal__header} ${props.headerClass}`}>
                <h2 className={styles.modal__header__title}>{props.header}</h2>
            </div>
            <form className={styles.form} onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`${styles.modal__content} ${props.contentClass}`}>
                    {props.children}
                </div>
                <div className={`${styles.modal__footer} ${props.footerClass}`}>
                    {props.footer}
                </div>
            </form>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {

    return (
    <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames={styles.modal}>
            <ModalOverlay {...props} />
        </CSSTransition>
    </React.Fragment>
    );
}

export default Modal;