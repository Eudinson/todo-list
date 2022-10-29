import Head from "next/head";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Todo List</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/checklist.png" />
            </Head>
            <div>
                <h1 className={styles.heading}>Simple todo list app</h1>
            </div>
        </div>
    );
}

export default Header;
