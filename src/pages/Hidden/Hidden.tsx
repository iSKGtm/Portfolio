import './Hidden.css'
import React from "react";

const Hidden: React.FC = () => {

    console.log("Atenção: Esta página não tem funcionalidades úteis, serve apenas para propositos de testes.")

    return (
        <>
            <main className='mainHidden'>
            Placeholder
            </main>
        </>
  );
};

export default Hidden;
