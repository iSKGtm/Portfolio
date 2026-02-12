import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- FRAMER MOTION ---
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTES & PAGES ---
import NoAvailable from './components/NoAvailable';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import NewsSearch from './pages/NewsSearch/NewsSearch';
import ArticleDetailPage from './pages/ArticleDetailPage/ArticleDetailPage';
import Hidden from './pages/Hidden/Hidden';
import NotFound from './components/NotFound';
import BlurTopBottom from './components/BlurTopBottom';

// --- MATERIAL UI ---
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

const SetTitle = ({ title }: { title: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

// Componente que gerencia as rotas animadas
const AnimatedRoutes = () => {
  const location = useLocation();

  // Variantes para páginas internas (Artigos, etc)
  const pageVariants = {
    initial: { opacity: 0, y: -10, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.1 } }
  };

  // Variantes específicas para a Home (Slide lateral)
  const homeVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.1} }
  };

  return (
    // mode="wait" garante que a página atual saia antes da nova entrar
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={homeVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%', overflowX: 'hidden' }}
            >
              <SetTitle title="iSKGtm - Home" />
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/artigos"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <SetTitle title="iSKGtm - Artigos" />
              <NewsSearch />
            </motion.div>
          }
        />

        <Route
          path="/artigo/:id"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <SetTitle title="iSKGtm - Artigo" />
              <ArticleDetailPage />
            </motion.div>
          }
        />

        <Route
          path="*"
          element={
            <div style={{ width: '100%' }}>
              <SetTitle title="Página não encontrada." />
              <NotFound />
            </div>
          }
        />

        <Route
          path="/hidden"
          element={
            <div style={{ width: '100%' }}>
              <SetTitle title="For Testing Purposes" />
              <Hidden />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <NoAvailable />
        <Navbar />
        <BlurTopBottom />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;