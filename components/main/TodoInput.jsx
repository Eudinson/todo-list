import { Add } from "@mui/icons-material";
import { 
    TextField, 
    IconButton 
} from "@mui/material";
import styles from './Main.module.css';

const TodoInput = () => {

    return (
        <div className={styles['todo-input-container']}>
            <TextField
                id="outlined-basic"
                label="Add todo"
                variant="outlined"
                size="small"
                sx={{
                    width: '50rem',
                    minWidth: '30rem'
                }}
            />
            <IconButton
                color="primary"
                aria-label="add todo list">
                <Add />
            </IconButton>
        </div>
    );
}

export default TodoInput;