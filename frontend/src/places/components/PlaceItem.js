import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Image from "../../shared/components/FormElements/Image";
import Card from "../../shared/components/UIElements/Card";
import Title from "../../shared/components/FormElements/Title";

import styles from "./PlaceItem.module.scss"

const PlaceItem = props => {
    return (
    <li className={styles.placeItem}>
        <Card>
        <div className={styles.placeItem__image}>
            <Image src={props.image} alt={props.title} />
        </div>
        <div className={styles.placeItem__info}>
            <Title size='small'>{props.title}</Title>
            <h3 className={styles.placeItem__address} title={props.address}>{props.address}</h3>
            <p className={styles.placeItem__description}>{props.description}</p>
        </div>
        <div className={styles.placeItem__actions}>
            <Button to='#' exact='true' size='small' space='true'>VIEW ON MAP</Button>
            <Button to='#' exact='true' size='small' space='true'>EDIT</Button>
            <Button to='#' exact='true' size='small'>DELETE</Button>
        </div>
        </Card>
    </li>);
}

export default PlaceItem;