import React from "react";


import styles from "./NewGoal.module.scss";

const INIT_TEXT = '';

const NewGoal = ({onAddGoal}) => {

    const [goal, setGoal] = React.useState(INIT_TEXT);

    const changeTextHandler = (evt) => {
        evt.preventDefault();
        setGoal((value) => evt.target.value);
    };

    const submitGoalHandler = (evt) => {
        evt.preventDefault();
        onAddGoal(goal);
        setGoal(value => INIT_TEXT);
    }

    return (
    <div className={styles.newGoalArea}>
        <form method="post" className={styles.newGoalForm}>
            <input type="text" onChange={changeTextHandler} name='goal' value={goal} placeholder="Type new goal" className={styles.newGoal}/>
            <input type="submit" value='Add' className={styles.submit} onClick={submitGoalHandler} />
        </form>
    </div>
    );
}

export default NewGoal;