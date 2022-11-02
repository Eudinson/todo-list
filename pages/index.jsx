import { useState, useEffect, useRef } from 'react';
import TodoInput from '../components/main/TodoInput';
import ListItems from '../components/main/ListItems';
import styles from '../styles/Home.module.css'

export default function Home() {

  const inputValue = useRef(null)
  const [listItems, setListItems] = useState([])

  console.log('render')

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'))
    list.length > 0 && setListItems(list)
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listItems))
  }, [listItems])

  return (
    <div>
      <main className={styles.container}>
        <TodoInput
          inputValue={inputValue}
          setListItems={setListItems}
          listItems={listItems}
        />
        <ListItems
          listItems={listItems}
          setListItems={setListItems}
        />
      </main>
    </div>
  )
}
