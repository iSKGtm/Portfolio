import './App.css';
import React, { useEffect, useState } from 'react';
import "@fontsource/inter/700.css";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/500.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700-italic.css';
import '@fontsource/merriweather/500-italic.css';
import '@fontsource/merriweather/400-italic.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NoAvailable from './components/NoAvailable';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import NewsSearch from './pages/NewsSearch/NewsSearch';
import ArticleDetailPage from './pages/ArticleDetailPage/ArticleDetailPage';

import Music from './pages/Music/Music';
import Prod from './pages/Prod/Prod';
import Dev from './pages/Dev/Dev';

import Hub from './pages/Hub/Hub';
import Hidden from './pages/Hidden/Hidden';
import NotFound from './components/NotFound';
import BlurTopBottom from './components/BlurTopBottom';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

const SetTitle = ({ title }: { title: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
    animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
    exit: { opacity: 0, filter: "blur(10px)", scale: 0.99, transition: { duration: 0.2 } }
  };

  const homeVariants = {
    initial: { opacity: 0, filter: "blur(10px)"},
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.2} }
  };

  return (
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
            >
              <SetTitle title="iSKGtm - Home" />
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/music"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={homeVariants}
            >
              <SetTitle title="iSKGtm Music" />
              <>
                <Music />
              </>
            </motion.div>
          }
        />

        <Route
          path="/prod"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={homeVariants}
            >
              <SetTitle title="iSKGtm Prod" />
              <>
                <Prod />
              </>
            </motion.div>
          }
        />

        <Route
          path="/dev"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={homeVariants}
            >
              <SetTitle title="iSKGtm Dev" />
              <>
                <Dev />
              </>
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
              transition={{ duration: 0.2 }}
            >
              <SetTitle title="iSKGtm - Artigos" />
              <NewsSearch />
            </motion.div>
          }
        />

        <Route
          path="/hub"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={homeVariants}
              transition={{ duration: 0.2 }}
            >
              <SetTitle title="iSKGtm Hub" />
              <Hub />
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
              transition={{ duration: 0.2 }}
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
              <SetTitle title="?" />
              <Hidden />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const isMusic = location.pathname === '/music';
  const isProd = location.pathname === '/prod';
  const isDev = location.pathname === '/dev';
  const isHidden = location.pathname === '/hidden';
  const isHub = location.pathname === '/hub';
  const [blurForcedOpacity, setBlurForcedOpacity] = useState<number | null>(null);
  const [navbarOpacity, setNavbarOpacity] = useState<number | null>(null);
  const isMainRoute = isHome || isMusic || isProd || isDev || isHidden;
  const effectiveNavbarOpacity = isHub ? 0 : isMainRoute ? null : navbarOpacity ?? 1;

  useEffect(() => {
    let timeoutId: number | undefined;

    if (isHub) {
      setBlurForcedOpacity(null);
      setNavbarOpacity(0);
    } else if (isMainRoute) {
      setBlurForcedOpacity(null);
      setNavbarOpacity(null);
    } else {
      setBlurForcedOpacity(0);
      setNavbarOpacity(1);
      timeoutId = window.setTimeout(() => {
        setBlurForcedOpacity(1);
        setNavbarOpacity(1);
      }, 300);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isHub, isMainRoute]);

  return (
    <>
      <NoAvailable />
      <Navbar forcedOpacity={effectiveNavbarOpacity} />
      <BlurTopBottom forcedOpacity={blurForcedOpacity} />
      <AnimatedRoutes />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
