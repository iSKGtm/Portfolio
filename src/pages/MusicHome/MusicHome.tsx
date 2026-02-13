import React from 'react';
import { motion } from 'framer-motion';
import AboutMusicHeader from '../../components/AboutMusicHeader';
// import MusicServices from '../../components/MusicServices'; // Exemplo de próximos passos

const MusicHome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ width: '100%', backgroundColor: '#050505' }} // Fundo levemente mais profundo
    >
      <AboutMusicHeader />
      
      {/* Espaço para as próximas seções como lançamentos e serviços */}
      <section style={{ height: '100vh', padding: '100px 20px' }}>
         {/* Conteúdo futuro aqui */}
      </section>
    </motion.div>
  );
};

export default MusicHome;