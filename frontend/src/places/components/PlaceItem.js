import React from "react";
import Card from "../../shared/components/UIElements/Card";

import styles from "./PlaceItem.module.scss"

const PlaceItem = props => {
    return (
    <li className={styles.placeItem}>
        <Card>
        <div className={styles.placeItem__image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.placeItem__info}>
            <h2 className={styles.placeItem__title}>{props.title}</h2>
            <h3 className={styles.placeItem__address}>{props.address}</h3>
            <p className={styles.placeItem__description}>{props.description}</p>
        </div>
        <div className={styles.placeItem__actions}>
            <button>VIEW ON MAP</button>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
        </Card>
    </li>);
}

export default PlaceItem;