import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

import styles from "./UserPlaces.module.scss"
import Title from "../../shared/components/FormElements/Title";

let placeIdIdx = -1;
const TITLE = 'User Places';

const getPlaceId = () => {
    return `p${++placeIdIdx}`;
}

const getLocation = (lat, lng) => {
    return {
        lat,
        lng 
    };
}

const INIT_PLACES = [
    {
        id: getPlaceId(),
        title: 'Empire State Building',
        description: 'The Empire State Building is a 102-story[c] Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.',
        image: '/images/empireStateBuilding.jpg',
        address: '20 W 34th St., New York, NY, USA 10001',
        creator: 'u0',
        location: getLocation(40.7484405, -73.9878584),
    },
    {
        id: getPlaceId(),
        title: 'Home',
        description: 'One of the most coziest place in the world.',
        image: '/images/home-612x612.jpg',
        address: 'Eastlake, OH, USA 44095',
        creator: 'u0',
        location: getLocation(41.6594465, -81.4312849),
    }
];

const UserPlaces = () => {
    const uid = useParams().uid;

    const [places, setPlaces] = React.useState(INIT_PLACES);

    const filteredPlaces = INIT_PLACES.filter((place) => place.creator === uid);

    return <main >
        <PlaceList places={filteredPlaces} />
    </main>;
}

export default UserPlaces;