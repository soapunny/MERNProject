import React from "react";
import UserList from "../components/UserList";

import styles from "./Users.module.scss";

let idIdx = 2;

const INIT_USER_LIST = [
    {
        id: '0',
        image: '/images/soap.jpg',
        name: 'Soap So',
        places: 3,
    },
    {
        id: '1',
        image: '/images/angel.jpg',
        name: 'Angel So',
        places: 1,
    }
];

const Users = () => {

    const [users, setUsers] = React.useState(INIT_USER_LIST);

    const getUserId = () => {
        const idx = idIdx.toString();
        idIdx++;
        return idx;
    }

    return(
    <main>
        <div>
            <h1>Users Pages</h1>
        </div>
        <div>
            <UserList users={users} />
        </div>
    </main>
    );
};

export default Users;