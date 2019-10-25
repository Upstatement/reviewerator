import React from 'react';
import { Chart } from 'components';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Chart />
    </main>
  );
};

export default Layout;
