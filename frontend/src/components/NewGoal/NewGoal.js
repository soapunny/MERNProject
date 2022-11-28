import React from "react";


import styles from "./NewGoal.module.scss";

const NewGoal = ({addGoalHandler}) => {

    const [goal, setGoal] = React.useState('');

    const changeTextHandler = (evt) => {
        evt.preventDefault();
        setGoal((value) => evt.target.value);
    };

    const submitGoalHandler = (evt) => {
        evt.preventDefault();
        addGoalHandler(goal);
    }

    return (
    <div className={styles.newGoalArea}>
        <form method="post" className={styles.newGoalForm}>
            <input type="text" onChange={changeTextHandler} name='goal' value={goal} className={styles.newGoal}/>
            <input type="submit" value='Add' className={styles.submit} onClick={submitGoalHandler} />
        </form>
    </div>
    );
}

export default NewGoal;