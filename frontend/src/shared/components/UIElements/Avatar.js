import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = ({image, alt, size}) => {
    return (
    <div className={styles.avatar}>
        <img src={image} alt={alt} width={size} height={size}/>
    </div>
    );
}

export default Avatar;