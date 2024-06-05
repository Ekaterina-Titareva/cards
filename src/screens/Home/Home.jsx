import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardAdded, cardDeleted, toggleFavorites } from '../../store/cardsSlice';
import fetchData from '../../store/fetchData';

const Home = () => {
    const dispatch = useDispatch();
    const { data, loading, error, favorites } = useSelector((state) => state.cards);

    useEffect(() => {
    dispatch(fetchData('https://random.dog/doggos'));
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredData = Array.isArray(data)
    ? data.filter(item => item.includes('.jpg')).slice(0, 16)
    : [];

    return (
        <main className='py-4 px-10 text-center font-mono bg-gradient-to-r from-green-500/30 to-amber-400/30'>
            <h1 className='text-green-600 text-3xl mb-6 font-extrabold'>
                Самые милые собачки тут
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredData.map(card => (
                    <div key={card} className='flex flex-col overflow-hidden rounded-lg border-4 border-white/50 bg-white/50 sm:h-60 lg:h-80 hover:border-green-500/30 hover:transition-colors hover:duration-300'>
                    <div>
                        <p className='text-sm text-gray-700 p-2'>
                        Открыть исходник можно тут 
                        <a 
                            href={`https://random.dog/${card}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='block text-xs text-blue-500 hover:text-blue-800 transition duration-300'>
                            {`https://random.dog/${card}`}
                        </a>
                        </p>
                        <div className='text-sm text-black'>
                        <button
                            onClick={() => dispatch(toggleFavorites(card))}
                            className={`inline-block m-3 w-6 h-6 ${favorites && favorites.includes(card) ? "bg-[url('./like.svg')] bg-no-repeat" : "bg-[url('./dislike.svg')] bg-no-repeat"}`}>
                        </button>
                        <button 
                            onClick={() => dispatch(cardDeleted(card))}
                            className='inline-block m-3 w-6 h-6 bg-[url("./trash.svg")] bg-no-repeat hover:bg-white/20'>
                        </button>
                        </div>
                    </div>
                    <img 
                        src={`https://random.dog/${card}`}
                        alt="картинка собачки"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Home;