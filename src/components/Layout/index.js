import React from 'react';
import { Detail, Master } from 'components';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Master className={styles.master} />
      <Detail className={styles.detail} />
    </main>
  );
};

export default Layout;
