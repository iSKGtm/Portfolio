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
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

const defaultDescription = 'Músicas, audiovisual & soluções digitais em um só lugar!';

const PageSeo = ({ title, description = defaultDescription }: { title: string; description?: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
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
              <PageSeo title="iSKGtm Hub" />
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
              <PageSeo
                title="iSKGtm - Home"
                description="Conheça a iSKGtm Hub, hub criativo da iShaking Creative Media, contendo músicas, audiovisual & soluções digitais em um só lugar!"
              />
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
              <PageSeo
                title="iSKGtm Music"
                description="Explore produções musicais, remixes & composições originais iSKGtm Music."
              />
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
              <PageSeo
                title="iSKGtm Prod"
                description="Conheça a área de produção visual da iSKGtm, com criação audiovisual, design, motion graphics e pipeline criativo."
              />
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
              <PageSeo
                title="iSKGtm Dev"
                description="Veja projetos, interfaces, soluções web e experiências digitais desenvolvidas pela iSKGtm Dev."
              />
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
              <PageSeo
                title="iSKGtm - Artigos"
                description="Acompanhe artigos, notícias, comunicados e registros de projetos da iShaking Creative Media."
              />
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
              <PageSeo
                title="iSKGtm Hub"
                description="Acesse os principais links da iSKGtm: música, produção visual, desenvolvimento, redes sociais e canais oficiais."
              />
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
              <PageSeo
                title="iSKGtm - Artigo"
                description="Leia artigos e publicações da iShaking Creative Media."
              />
              <ArticleDetailPage />
            </motion.div>
          }
        />

        <Route
          path="*"
          element={
            <div style={{ width: '100%' }}>
              <PageSeo
                title="Página não encontrada."
                description="A página solicitada não foi encontrada no site."
              />
              <NotFound />
            </div>
          }
        />

        <Route
          path="/hidden"
          element={
            <div style={{ width: '100%' }}>
              <PageSeo title="?" description="?" />
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
    const timeoutId = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 220);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname]);


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
      <HelmetProvider>
        <Router>
          <AppContent />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
