import React from 'react';
import { Note } from '../../types/Note';
import styles from './NoteCard.module.css';

export const NoteCard: React.FC<{ note: Note; onDelete: (id: number) => void }> = ({ note, onDelete }) => {
  return (
    <div className={styles["note-card"]}>
      <p>{note.content}</p>
      <button className={styles["delete-button"]} onClick={() => onDelete(note.id)}>❌</button>
    </div>
  );
};
