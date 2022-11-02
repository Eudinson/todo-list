import { useState } from 'react';
import TodoInput from '../components/main/TodoInput';
import ListItems from '../components/main/ListItems';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [inputValue, setInputValue] = useState('')
  const [listItems, setListItems] = useState([])

  return (
    <div>
      <main className={styles.container}>
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          setListItems={setListItems}
          listItems={listItems}
        />
        <ListItems
          inputValue={inputValue}
          listItems={listItems}
          setListItems={setListItems}
        />
      </main>
    </div>
  )
}
