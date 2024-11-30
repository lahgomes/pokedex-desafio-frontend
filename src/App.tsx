import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './page/Home';
import Favoritos from './page/Favoritos';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
