import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect} from 'react';
import Error404 from './screens/Error404/Error404.jsx'
import useFetchData from './hooks/useFetchData';
import filterOfData from './services/filterOfData.js'
import Main from './screens/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const { data, loading, error } = useFetchData('https://random.dog/doggos');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (data) {
      setCards(filterOfData(data, ".jpg").slice(0, 16));
    }
  }, [data]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <Router>
      < Header />
      <Routes>
          <Route path='/' element={ 
            <Main cards = {cards}/>} />
          <Route path='/*' element={
            < Error404 />} 
				/>
      </Routes>
      < Footer />
	</Router>
  );
}

export default App;