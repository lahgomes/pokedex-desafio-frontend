import { Routes, Route } from 'react-router-dom';
import Favoritos from './page/Favoritos';
import GlobalStyle from './styles/global';
import Home from './page/Home';
import Layout from './components/Layout';
import ModalProvider from './provider/ModalProvider';
import ServiceProvider from './provider/ServiceProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <ServiceProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="favoritos" element={<Favoritos />} />
            </Route>
          </Routes>
        </ModalProvider>
      </ServiceProvider>
    </>
  );
}

export default App;
