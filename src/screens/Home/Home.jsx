
const Main = (props) => {
    return (
        <main className='container mx-auto p-4 text-center font-mono bg-gradient-to-r from-green-500/30 to-amber-400/30'>
            <h1 className='text-green-600 text-3xl mb-6 font-extrabold'>
            Самые милые собачки тут
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {props.cards?.map(card => (
                <div key={card} className='flex flex-col overflow-hidden rounded-lg border-4 border-white/50 bg-white/50 sm:h-60 lg:h-80 hover:border-green-500/30 hover:transition-colors hover:duration-300'>
                <p className='text-sm text-gray-700 p-2'>
                    Открыть исходник можно тут 
                    <a 
                    href={`https://random.dog/${card}`}
                    target="_blank"
                    className='block text-xs text-blue-500 hover:text-blue-800 transition duration-300'>
                    {`https://random.dog/${card}`}
                    </a>
                </p>
                <img 
                    src={`https://random.dog/${card}`}
                    alt="картинка собачки"
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            ))}
            </div>
        </main>
)
}

export default Main;