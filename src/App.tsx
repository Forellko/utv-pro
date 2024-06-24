import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/about" />
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default App;
