import React, { useState } from 'react'

import { Checkbox, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { motion } from 'framer-motion'

function Task({dataParam}) {

    const [data, setData]           = useState(dataParam.task)
    const [className, setClassName] = useState('done')
    const [checked, setChecked]     = useState(false)

    const useStyles = makeStyles({

        Paper: {
            width       : "100%",
            textAlign   : "left"
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

        initial = {{opacity: 0, y: -2000}}
        animate = {{opacity: 1, y: 0}}
        
        
        >
            <Paper

            className = {classes.Paper}

            >
                <Checkbox
                
                onChange = {handleChange} 
                
                ></Checkbox>

                <div className = {"task " + (checked && className)}>
                    {data}
                </div>

            </Paper>
        </motion.div>
        
    )
}

export default Task
