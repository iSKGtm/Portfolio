import React from "react";
import styles from './index.module.css';

const AboutProjects: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.title}>
            nossos projetos
          </div>
          <div className={styles.label}>
            Aqui estão os projetos feitos para clientes que aprovaram!
          </div>

          <div className={styles.container3D}>
            <div className={styles.d3d}>
              <img src="/public/images/symb/placeholder480.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}> Carousel</div>
      </div>
    </div>
  );
};

export default AboutProjects;