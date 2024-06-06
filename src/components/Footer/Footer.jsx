import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <h2 
                className={styles.text}>
                    Разработчик данного сайта: Титарева Екатерина
            </h2>
            <a 
                className={styles.link}
                href="https://github.com/Ekaterina-Titareva"
                target="_blank">
                    https://github.com/Ekaterina-Titareva
            </a>
        </footer>
)
}

export default Footer;