import React from "react";
import UserItem from "./UserItem";

import styles from "./UserList.module.scss";

const UserList = ({users}) => {
    if(!users || users.length === 0){
        return (
        <div className={styles.noUserArea}>
            <h1 className={styles.noUser}>Sorry, No Users found.</h1>
        </div>
        );
    }

    return (
    <ul>
        {users.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
    );

};

export default UserList;