import React from 'react';
import { NoteCard } from '../NoteCard/NoteCard';
import { Note } from '../../types/Note';
import styles from './NotesList.module.css';

export const NotesList: React.FC<{ notes: Note[]; onDelete: (id: number) => void }> = ({ notes, onDelete }) => {
  return (
    <div className={styles["notes-list"]}>
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};
