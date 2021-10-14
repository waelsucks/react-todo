import React, { useState } from 'react'

import { Box } from '@mui/system'
import { TextField } from '@mui/material'

import { Button } from '@mui/material'

function TaskInput({addTask, setOpenModal}) {

    const [task, setTask] = useState('');

    const handleSubmit = () => {

        addTask(task);
        setOpenModal(false);

    }

    return (
        <div className="task-input">
            
            <Box
            
            display         = "flex"
            flexDirection   = "column"
            alignItems      = "center"

            >

            <TextField
            autoComplete="false"
            margin="normal"
            required
            fullWidth
            id="task"
            label="New Task"
            name="task"
            autoFocus

            onChange = { (e) => {
                setTask(e.target.value)
            } }

            />

            <Button
            
            onClick = {handleSubmit}
            
            >SUBMIT</Button>

            </Box>

        </div>
    )
}

export default TaskInput
