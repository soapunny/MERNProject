import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Image from "../../shared/components/FormElements/Image";
import Card from "../../shared/components/UIElements/Card";
import Title from "../../shared/components/FormElements/Title";

import styles from "./PlaceItem.module.scss"

import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = props => {
    const INIT_SHOW_MAP = false;

    const [showMap, setShowMap] = React.useState(INIT_SHOW_MAP);

    const openMapHandler = () => {
        setShowMap(value => true);
        console.log(`showMap: ${showMap}`);
    }
    const closeMapHandler = () => {
        setShowMap(value => false);
    }


    return (
    <React.Fragment>
    <Modal 
        show={showMap} 
        onCancel={closeMapHandler}
        header={props.address}
        headerClass={styles.modal__header}
        contentClass={styles.modal__content}
        footerClass={styles.modal__actions}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
    >
        <div className={styles.map}>
            <h2># MAP</h2>
        </div>
    </Modal>
    <li key={props.id} className={styles.placeItem}>
        <Card style={styles.card}>
        <div className={styles.placeItem__image}>
            <Image src={props.image} alt={props.title} />
        </div>
        <div className={styles.placeItem__info}>
            <Title size='small'>{props.title}</Title>
            <h3 className={styles.placeItem__address} title={props.address}>{props.address}</h3>
            <p className={styles.placeItem__description}>{props.description}</p>
        </div>
        <div className={styles.placeItem__actions}>
            <Button onClick={openMapHandler} exact='true' size='small' space='true'>VIEW ON MAP</Button>
            <Button to='#' exact='true' size='small' space='true'>EDIT</Button>
            <Button to='#' exact='true' size='small' danger='true'>DELETE</Button>
        </div>
        </Card>
    </li>
    </React.Fragment>);
}

export default PlaceItem;