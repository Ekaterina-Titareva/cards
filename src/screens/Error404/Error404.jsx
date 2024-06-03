import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <main className='container mx-auto p-4 text-center font-mono'>
            <h1 className='text-green-600 text-3xl mb-6 font-extrabold'>Данная страница не найдена.</h1>
            <h3> Вернуться на <Link className='block text-xs text-blue-500 hover:text-blue-800 transition duration-300' to="/">главную страницу</Link></h3>
        </main>
)
}

export default Error404;