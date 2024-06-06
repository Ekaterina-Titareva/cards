import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites, cardDeleted } from '../../store/cardsSlice';
import Button from '../Button/Button';
import styles from './styles.module.css'

const Card = ({ card }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.cards.favorites);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorites(card));
    };

    const handleDelete = () => {
        if (favorites.includes(card)) {
            dispatch(toggleFavorites(card));
        }
        dispatch(cardDeleted(card));
    };

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text}>
                    Открыть исходник можно тут 
                    <a 
                        href={`https://random.dog/${card}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}>
                        {`https://random.dog/${card}`}
                    </a>
                </p>
                <div className={styles.buttonsWrapper}>
                    <Button 
                        onClick={handleToggleFavorite}
                        className={`${styles.button} ${favorites.includes(card) ? styles.like : styles.dislike}`}
                    />
                    <Button 
                        onClick={handleDelete}
                        className={`${styles.button} ${styles.delete}`}
                    />
                </div>
                </div>

            <img 
                src={`https://random.dog/${card}`}
                alt="картинка собачки"
                className={styles.image}
            />
        </div>
    );
};

export default Card;