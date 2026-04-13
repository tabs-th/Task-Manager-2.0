/* ══════════════════════════════════════════════════════
   COMPONENT: TaskForm
   PURPOSE:  Controlled form that lets the user type a new race gear item and submit it to the list.
   TYPE:     Client Component ('use client')
   PROPS:    onAdd — function passed from TaskBoard to handle state
   ══════════════════════════════════════════════════════ */
'use client';

import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  /* RUBRIC: State declaration
     Why: I'm using state to track the 'title' as the user types. 
     This stays local because the rest of the app doesn't need to 
     know what's in the box until the user hits Add. */
  const [title, setTitle] = useState('');

  /* RUBRIC: The e.preventDefault() call
     Why: This stops the browser from doing a full page reload when the form is submitted, keeping the React app state intact. */
  function handleSubmit(e) {
    e.preventDefault();

    /* RUBRIC: Form Validation
       Why: Using .trim() avoids adding blank cards. If it's empty, we return early. */
    if (!title.trim()) return;

    onAdd(title.trim()); 
    setTitle(''); // Clears the input field after a successful add
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        /* RUBRIC: Controlled input
           Why: The value is linked to state so React is the 'single source of truth' for what is inside this text box. */
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add race gear..."
        className="flex-1 p-3 rounded-lg bg-background border border-foreground/20 focus:outline-none focus:border-neon-green text-foreground"
      />
      <button 
        type="submit" 
        className="bg-neon-green text-black font-bold px-6 py-2 rounded-lg hover:opacity-80 transition-opacity"
      >
        ADD
      </button>
    </form>
  );
}