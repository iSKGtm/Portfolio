import React from 'react'
import styles from './index.module.css'


const BlurTopBottom: React.FC = () => {

  return (
    <>
        <div className={styles.containerBlurTopBottom}>
            <div className={styles.BlurTop}></div>
            <div className={styles.BlurBottom}></div>
        </div>
    </>
  )
}

export default BlurTopBottom
