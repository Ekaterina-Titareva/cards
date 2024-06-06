import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../../store/fetchData';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import styles from './styles.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const { data, loading, error, favorites } = useSelector((state) => state.cards);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        dispatch(fetchData('https://random.dog/doggos'));
    }, [dispatch]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    const handleToggleView = () => {
        setShowFavorites(!showFavorites);
    };

    const displayData = showFavorites ? favorites : data;

    return (
        <main className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.text}>
                    Самые милые собачки тут
                </h1>
                <Button
                    onClick={handleToggleView}
                    className={styles.button}>
                    {showFavorites ? 'Показать все' : 'Избранное'}
                </Button>
            </div>
            {showFavorites && favorites.length === 0 ? (
                <p className="my-[20%]">В избранном пусто</p>
            ) : (
                <div className={styles.cardsWrapper}>
                    {displayData.map(card => (
                        <Card key={card} card={card} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;