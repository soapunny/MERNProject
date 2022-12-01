import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";

import styles from "./UserItem.module.scss";

const UserItem = ({user}) => {

    return (
    <li key={user.id} className={styles.userItem}>
        <Link to={`/users/${user.id}/places`} className={styles.placeLink}>
            <Avatar image={user.image} alt={user.name +"'s image"} size='50'/>
            <div className={styles.userInfo}>
                <div className={styles.userInfo__name}>
                    {user.name}
                </div>
                <div className={styles.userInfo__places}>
                    {user.places} Places
                </div>
            </div>
        </Link>
    </li>
    );
};

export default UserItem;