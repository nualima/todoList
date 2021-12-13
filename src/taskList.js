import React, {component} from 'react';
import {EXEMPLE_TASK} from './data';

export function TaskList(props) {

    state = {
        task: [],
    }

    const taskCompoents= () => {
        <Task
        id = {task.id}
        title = {task.title}
        date = {task.date}
        description = {task.description}

        />

    }

    return(
        <div className='taskList'>
            <p>Liste des taches</p>


            {/* {taskComponents} */}
        </div>

        
    )
}