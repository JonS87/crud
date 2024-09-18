// src/App.tsx
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Header } from './components/Header/Header';
import { NoteForm } from './components/NoteForm';
import { NotesList } from './components/NotesList';
import { Note } from './types/Note';
import './App.css';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:7070/notes');
    const data = await response.json();
    setNotes(data);
  };

  const addNote = async (content: string) => {
    await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 0, content }),
    });
    fetchNotes();
  };

  const deleteNote = async (id: number) => {
    await fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app">
      <Header onRefresh={fetchNotes} />
      <NotesList notes={notes} onDelete={deleteNote} />
      <NoteForm onAdd={addNote} />
    </div>
  );
};

export default App;
