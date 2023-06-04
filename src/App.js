import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favorite from './components/Favorite';
import Pagination from './components/Pagination';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
    <Navbar/>
    <Routes>

    <Route path='/'  element = { 
       <>
    <Banner/>
    <Movies/>
    <Pagination/> </> } > 
    </Route>


    <Route path='/fav' element={<Favorite></Favorite>}>    </Route>

    <Route path='*'  element={<PageNotFound></PageNotFound>}></Route>


    </Routes>

   
   
  
   </Router>
    </>
  );
}

export default App;
