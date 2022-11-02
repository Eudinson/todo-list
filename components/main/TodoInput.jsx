import { useState, useEffect } from "react";
import { Add } from "@mui/icons-material";
import {
    TextField,
    IconButton
} from "@mui/material";
import styles from './Main.module.css';


const TodoInput = ({
    inputValue,
    setInputValue,
    setListItems,
    listItems
}) => {

    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }

    const handleClick = () => {
        const randomId = (new Date().getMilliseconds() * Math.random(100));
        if (!inputValue) {
            setError(true)
        } else {
            setError(false)
            setInputValue('')
            const newArr = [...listItems, 
                {
                    id: randomId,
                    todos: inputValue
                }]
            setListItems(newArr)
        }
    }

    return (
        <div className={styles['todo-input-container']}>
            <TextField
                error={error}
                id="outlined-basic"
                label="Add todo"
                variant="outlined"
                size="small"
                sx={{
                    width: '50rem',
                    minWidth: '30rem'
                }}
                value={inputValue}
                onChange={handleChange}
            />
            <IconButton
                color="primary"
                aria-label="add todo list"
                onClick={handleClick}
            >
                <Add />
            </IconButton>
        </div>
    );
}

export default TodoInput;