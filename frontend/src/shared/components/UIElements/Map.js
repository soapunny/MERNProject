import React from "react";

import styles from "./Map.module.scss";

const Map = ({zoom, center, className}) => {

    console.log(`zoom : ${zoom}`);
    console.log(`center : ${center}`);
    
    const mapRef = React.useRef();
    React.useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center,
            zoom,
        });

        new window.google.maps.Marker({position: center, map});
    }, [center, zoom]);


    return <div ref={mapRef} className={`${styles.map} ${className}`}></div>;
}

export default Map;