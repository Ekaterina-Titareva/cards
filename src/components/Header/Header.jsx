const Header = () => {
    return (
        <header className='p-4 text-center font-mono'>
            <h2 className='text-black text-xl m-0 font-extrabold'>Для данного сайта был использован публичный API:</h2>
            <a className='text-sm text-blue-500 hover:text-blue-800 transition duration-300' href="https://random.dog/doggos/" target="_blank">https://random.dog/doggos/</a>
        </header>
)
}

export default Header;