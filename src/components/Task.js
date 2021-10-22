import React, { useState } from 'react'

import { Checkbox, Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { motion } from 'framer-motion'
import DeleteIcon from '@mui/icons-material/Delete';

function Task({dataParam, handleRemove}) {

    console.log("New task created! ID: ", dataParam.id)

    const [data, setData]           = useState(dataParam.task)
    const [className, setClassName] = useState('done')
    const [checked, setChecked]     = useState(false)

    const useStyles = makeStyles({

        Paper: {
            width       : "100%",
            textAlign   : "left",
            display     : "grid",
            gridTemplateColumns: "1fr 1fr"
        }

    })

    const handleChange = (event) => {

        setChecked(event.target.checked)
        console.log(event.target.checked)

    }

    const classes = useStyles();

    return (

        <motion.div
        
        style = {{
            width: "100%"
        }}

        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        
        
        >
            <Paper

            className = {classes.Paper}

            >
                <div>
                    <Checkbox
                    
                    onChange = {handleChange} 
                    
                    ></Checkbox>

                    <div className = {"task " + (checked && className)}>
                        {data}
                    </div>
                </div>

                <Button
                    
                    size        = "small"
                    color       = "error"
                    variant     = "contained"
                    style       = {{justifySelf: "end", borderRadius: "0"}}
                    startIcon   = {<DeleteIcon />}

                    disableElevation

                    onClick     = {handleRemove}

                > REMOVE</Button>



            </Paper>
        </motion.div>
        
    )
}

export default Task
