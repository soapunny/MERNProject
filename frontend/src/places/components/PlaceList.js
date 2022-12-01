import React from "react";
import PlaceItem from "./PlaceItem";

import styles from "./PlaceList.module.scss"

const PlaceList = props => {
    if(!props.places || props.places.length === 0){
        return (
        <div className={styles.noPlace}>
            <h2 className={styles.noPlace__title}>No Place Found. Can you share one?</h2>
            <button className={styles.noPlace__newBtn}>Share place</button>
        </div>
        );
    }
    return (
        <ul className={styles.placeList}>
            {props.places.map(place => {
                return (
                    <PlaceItem 
                    key={place.id}
                    id={place.id} 
                    image={place.image} 
                    title={place.title} 
                    description={place.description} 
                    address={place.address} 
                    creatorId={place.creator} 
                    coordinates={place.location}
                    />
                );
            })
            }
        </ul>
    );
}

export default PlaceList;
