import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error404 from './screens/Error404/Error404.jsx'
import Home from './screens/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <Router>
      < Header />
      <Routes>
          <Route path='/' element={ 
            <Home />} />
          <Route path='/*' element={
            < Error404 />} 
				/>
      </Routes>
      < Footer />
	</Router>
  );
}

export default App;