import { Link } from "react-router-dom";
import styles from './styles.module.css'

const Error404 = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Данная страница не найдена.</h1>
            <h3> Вернуться на <Link className={styles.link} to="/cards">главную страницу</Link></h3>
        </main>
)
}

export default Error404;