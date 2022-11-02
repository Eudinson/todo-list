import { useState, useEffect } from "react";
import { Add } from "@mui/icons-material";
import {
    TextField,
    IconButton
} from "@mui/material";
import styles from './Main.module.css';


const TodoInput = ({
    inputValue,
    setListItems,
    listItems
}) => {

    const [error, setError] = useState(false);
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        inputValue.current = value
        setInput(value)
    }

    const handleClick = () => {
        const randomId = (new Date().getMilliseconds() * Math.random(100));
        if (!inputValue.current) {
            setError(true)
        } else {
            setError(false)
            const newArr = [...listItems, 
                {
                    id: randomId,
                    todos: inputValue.current
                }]
            setListItems(newArr)
            inputValue.current = null;
            setInput('')
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
                value={input}
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