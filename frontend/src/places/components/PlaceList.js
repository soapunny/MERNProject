import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Title from "../../shared/components/FormElements/Title";
import PlaceItem from "./PlaceItem";

import styles from "./PlaceList.module.scss"

const PlaceList = props => {
    if(!props.places || props.places.length === 0){
        return (
        <div className={styles.noPlace}>
            <div className={styles.noPlace__title}>
                <Title size='default'>No Place Found. Can you share one?</Title>
            </div>
            <div className={styles.noPlace__button}>
                <Button size='default' fit='true' to='#'>Share place</Button>
            </div>
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
