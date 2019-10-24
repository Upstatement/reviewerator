import React, { useState } from 'react';
import { Detail, Master } from 'components';
import { className } from 'utils';
import styles from './layout.module.scss';

const Layout = () => {
  const [masterIsHidden, setMasterIsHidden] = useState(false);

  const toggleMaster = () => {
    setMasterIsHidden(!masterIsHidden);
  };

  return (
    <main className={styles.main}>
      <button
        onClick={toggleMaster}
        {...className(styles.showHideBtn, masterIsHidden && styles.show)}>
        {masterIsHidden ? 'Show Controls' : 'Hide Controls'}
      </button>
      <div className={styles.layout}>
        <Master {...className(styles.master, masterIsHidden && styles.hidden)} />
        <Detail className={styles.detail} />
      </div>
    </main>
  );
};

export default Layout;
