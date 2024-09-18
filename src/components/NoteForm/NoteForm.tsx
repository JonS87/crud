import React, { useState } from 'react';
import styles from './NoteForm.module.css';
import right from '../../assets/right.png';

export const NoteForm: React.FC<{ onAdd: (content: string) => void }> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(content);
    setContent('');
  };

  return (
    <form className={styles["note-form"]} onSubmit={handleSubmit}>
      <label htmlFor="new-note">New Note</label>
      <textarea
        id='new-note'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className={styles["add-button"]}>
        <img className={styles["icon"]} src={right} alt="Добавить" />
      </button>
    </form>
  );
};
