
import React from "react";

import styles from "./Header.module.scss";

const header = () => {

    return (
    <header>
        <div className={styles.titleArea}>
            <h1 className={styles.title}>MERN project</h1>
        </div>
        <div className={styles.menuArea}>
            <ul className={styles.list}>
                <li><a>menu1</a></li>
                <li><a>menu2</a></li>
                <li><a>menu3</a></li>
                <li><a>menu4</a></li>
                <li><a>menu5</a></li>
            </ul>
        </div>
    </header>
    );
};

export default header;