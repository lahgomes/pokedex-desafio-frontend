import { Routes, Route } from 'react-router-dom';
import Favoritos from './page/Favoritos';
import GlobalStyle from './styles/global';
import Home from './page/Home';
import Layout from './components/Layout';
import ModalProvider from './provider/ModalProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
