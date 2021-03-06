import { useState, useEffect } from "react";
import React        from 'react'

import TaskDisplay  from "./TaskDisplay";
import TaskInput    from "./TaskInput";

import { Paper }    from "@mui/material";
import { Button }   from "@mui/material";
import AddIcon      from '@mui/icons-material/Add';
import { Backdrop } from "@mui/material";

import CloseIcon    from '@mui/icons-material/Close';


function TaskManager() {

    var id = 0;

    const [tasks    , setTasks]     = useState([]);
    const [openModal, setOpenModal] = useState(false)

    const addTask = (data) => {

        const oldTasks = [...tasks];

        oldTasks.push({
            task: data,
            id: id
        });

        setTasks(oldTasks);

        id += 1;

    }

    const removeTask = (data) => {
        console.log(data);
    }
    
    useEffect(() => {

        console.log(tasks)
        
    }, [tasks])

    return (
        <div>
            <Button
            
            variant="contained"
            disableElevation
            onClick={ () => {setOpenModal(true)} }

            >   <AddIcon></AddIcon>
            
            </Button>

            <TaskDisplay activeTasks={tasks} removeTask = {removeTask}></TaskDisplay>

            <Backdrop
            
            open = {openModal}
            
            >

                <Paper>
                    <Button
                    
                    onClick={() => {setOpenModal(false)}}
                    
                    >
                        <CloseIcon></CloseIcon>

                    </Button>
                    <TaskInput
                    
                    addTask         = {addTask}
                    setOpenModal    = {setOpenModal}
                    
                    ></TaskInput>
                </Paper>

            </Backdrop>

        </div>
    )
}

export default TaskManager
