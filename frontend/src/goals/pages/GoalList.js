import React, { useEffect } from 'react';

import styles from './GoalList.module.scss';
import NewGoal from '../components/NewGoal';

let idxCounter = 2;
const INIT_GOALS = [
    {
        id: '0',
        text: 'Finish the course'
    },
    {
        id: '1',
        text: 'Learn all about the Course Main Topic'
    },
];

const GoalList = () => {
    
    const getNewId = () => {
        
        const newId = idxCounter.toString();
        idxCounter++;
        return newId;
    }
    const [goals, setGoals] = React.useState(INIT_GOALS);

    const addGoalHandler = (text) => {
        if(text && text.length > 0){
            const id = getNewId();
            const newGoal = {
                id,
                text
            };
            
            //setGoals(curList => [...curList, newGoal]);//First way
            setGoals(curList =>  curList.concat(newGoal));//Second way
        } else{
            alert("Fill the todo form first");
        }
    };

    const deleteGoalHandler = (evt) => {
        console.log(evt);
        const id = evt.target.accessKey;

        setGoals(curList => {
            return curList.filter((goal) => {
                if(goal.id === id){
                    return false;
                }
                return true;
            });
        });
    }

    React.useEffect(()=> { 
        console.log("goals: "+goals);
    }, [goals]);

    return (
    <main>
        <div>
            <h1>Goal List Page</h1>
        </div>
        <NewGoal onAddGoal={addGoalHandler}/>
        <div className={styles.listArea}>
            <ul className={styles.list}>
                {
                    goals ? 
                        goals[0] ?
                        goals.map(goal => {
                            return <li key={goal.id}>{goal.text}<a accessKey={goal.id} onClick={deleteGoalHandler} className={styles.delete}>X</a></li>;
                        })
                        :  <li>No data</li>
                    :  <li>No data</li>

                }

            </ul>
        </div>
    </main>
    );

};

export default GoalList;