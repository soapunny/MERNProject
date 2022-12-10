import React from "react";

import styles from "./Map.module.scss";

const Map = props => {

    return <div className={`${styles.map} ${props.className}`} ></div>;
}

export default Map;