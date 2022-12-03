import React from "react";
import Title from "../../shared/components/FormElements/Title";
import UserList from "../components/UserList";

import styles from "./Users.module.scss";

const TITLE = 'Users Page';
let idIdx = 2;

const INIT_USER_LIST = [
    {
        id: '0',
        image: '/images/soap.jpg',
        name: 'Soap So',
        places: 2,
    },
    {
        id: '1',
        image: '/images/angel.jpg',
        name: 'Angel So',
        places: 0,
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
            <Title size='default'>
                {TITLE}
            </Title>
        </div>
        <div>
            <UserList users={users} />
        </div>
    </main>
    );
};

export default Users;