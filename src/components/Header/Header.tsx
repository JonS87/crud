import React from 'react';
import styles from './Header.module.css';
import sync from '../../assets/sync.png';

export const Header: React.FC<{ onRefresh: () => void }> = ({ onRefresh }) => {
  return (
    <div className={styles["header"]}>
      <h1>Notes</h1>
      <button className={styles["refresh-button"]} onClick={onRefresh}>
        <img className={styles["icon"]} src={sync} alt="Обновить" />
      </button>
    </div>
  );
};
