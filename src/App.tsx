import Providers from './particles/providers/Providers';
import { Route, Routes } from 'react-router-dom';
import { Home, MovieDetail } from './pages';

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </Providers>
  )
}

export default App;
