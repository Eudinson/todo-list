import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from './Main.module.css';
import { IconButton } from '@mui/material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { useState } from 'react';

const ListItems = ({ listItems, setListItems }) => {

    const handleDelete = (id) => {
        const result = listItems.filter((item) => item.id !== id)
        setListItems(result)
    }

    const handleEdit = (id) => {
        const selectetdItem = listItems.filter((item) => item.id === id)
        console.log(selectetdItem)
    }

    return (
        <List className={styles['list-container']}>
            {
                listItems.map(({ todos, id }) => {
                    return (
                        <div className={styles['list-item']} key={id}>
                            <ListItem alignItems="flex-start">
                                <p>{todos}</p>
                            </ListItem>
                            <div className={styles['action-btn-container']}>
                                <IconButton
                                    onClick={() => handleEdit(id)}
                                >
                                    <EditOutlined />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDelete(id)}
                                >
                                    <DeleteOutline />
                                </IconButton>
                            </div>
                        </div>
                    )
                })
            }
        </List>
    );
}

export default ListItems;
