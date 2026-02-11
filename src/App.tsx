import './App.css';
import React from 'react';
import NoAvailable from './components/NoAvailable';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import NewsSearch from './pages/NewsSearch/NewsSearch';
import ArticleDetailPage from './pages/ArticleDetailPage/ArticleDetailPage';
import Hidden from './pages/Hidden/Hidden';
import NotFound from './components/NotFound';
import BlurTopBottom from './components/BlurTopBottom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

// --- NOVOS IMPORTS DO MATERIAL UI ---
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme'; // Certifique-se de que o arquivo theme.ts está na mesma pasta ou ajuste o caminho

const SetTitle = ({ title }: { title: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const FadeInContainer = styled.div`
  opacity: 0;
  animation: fadeIn 200ms ease-out forwards;

  @keyframes fadeIn {
    from {
      transform: translateY(-1%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const FadeInContainerHome = styled.div`
  animation: fadeInHome 200ms ease-out;

  @keyframes fadeInHome {
    from {
      transform: translateY(-1%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

function App() {
  return (
    /* ThemeProvider envolve tudo para que botões e textos sigam o vidro azul */
    <ThemeProvider theme={theme}>
      {/* CssBaseline limpa estilos padrões do browser e aplica o fundo dark do tema */}
      <CssBaseline /> 
      
      <Router>
        <NoAvailable />
        <Navbar />
        <BlurTopBottom />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SetTitle title="iShaking Creative Media" />
                <Navigate to="/home" replace />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <FadeInContainerHome>
                <SetTitle title="iSKGtm - Home" />
                <Home />
              </FadeInContainerHome>
            }
          />
          <Route
            path="/artigos"
            element={
              <FadeInContainer>
                <SetTitle title="iSKGtm - Artigos" />
                <NewsSearch />
              </FadeInContainer>
            }
          />
          <Route
            path="/artigo/:id"
            element={
              <>
                <SetTitle title="iSKGtm - Artigo" />
                <FadeInContainer>
                  <ArticleDetailPage />
                </FadeInContainer>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <SetTitle title="Página não encontrada." />
                <NotFound />
              </>
            }
          />
          <Route
            path="/hidden"
            element={
              <>
                <SetTitle title="For Testing Purposes" />
                <Hidden />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;