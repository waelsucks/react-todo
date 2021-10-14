import { makeStyles } from '@mui/material';
import React, { useState } from 'react'

import Task from './Task';

function TaskDisplay({activeTasks}) {

    const [tasks, setTasks] = useState(activeTasks);

    return (
        <div className = "task-display">

            {activeTasks.map( (task) => {
                return(

                    <Task dataParam = {task}></Task>

                )
            } )}

        </div>
    )
}

export default TaskDisplay
