import './Hidden.css'
import React, { useState, useEffect, useRef } from "react";

const Hidden: React.FC = () => {

    console.log("Atenção: Esta página não tem funcionalidades úteis, serve apenas para propositos de testes.")

    return (
        <>
            <main className='mainHidden'>
            iSKGtm Music Placeholder
            </main>
        </>
  );
};

export default Hidden;