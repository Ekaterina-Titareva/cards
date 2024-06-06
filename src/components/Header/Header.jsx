import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <h2 className={styles.text}>Для данного сайта был использован публичный API:</h2>
            <a className={styles.link} href="https://random.dog/doggos/" target="_blank">https://random.dog/doggos/</a>
        </header>
)
}

export default Header;