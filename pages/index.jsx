import TodoInput from '../components/main/TodoInput';
import ListItems from '../components/main/ListItems';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main className={styles.container}>
        <TodoInput />
        <ListItems />
      </main>
    </div>
  )
}
