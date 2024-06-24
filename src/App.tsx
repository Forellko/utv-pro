import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import AboutPageLazy from './pages/AboutPage/AboutPageLazy';
import MainPageLazy from './pages/MainPage/MainPageLazy';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path="/about" element={<AboutPageLazy />} />
        <Route path="/" element={<MainPageLazy />} />
      </Routes>
    </div>
  );
};

export default App;
