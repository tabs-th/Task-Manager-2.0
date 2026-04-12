/* COMPONENT: AddTaskForm
   PURPOSE: Input to type in items needed for race day. Used to tell TaskBoard what the user typed.
   TYPE: Client Component
   PROPS: onAdd (a function that sends the new title up to the Brain)
*/
'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  // RUBRIC: State declaration
  // Why: Using local state to track user typed text in the box.  
  const [text, setText] = useState('');

  // RUBRIC: The e.preventDefault() call
  // Why: Stops the whole browser from refreshing when Enter is clicked and avoids HTML form default. 
  const handleSubmit = (e) => {
    e.preventDefault();

    // RUBRIC: Form Validation
    // Why: Checking .trim() to avoid adding empty spaces as tasks
    if (text.trim().length > 0) {
      onAdd(text.trim());
      setText(''); // Clears the box so I can type the next item
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        /* RUBRIC: Controlled input
           Why: value and onChange work together so the React state matches text box entries. */
        onChange={(e) => setText(e.target.value)}
        placeholder="Add gear (e.g. Bib Pins)"
        className="flex-1 p-3 rounded-lg bg-background border border-foreground/20 focus:outline-none focus:border-neon-green"
      />
      <button 
        type="submit"
        className="bg-neon-green text-black font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
      >
        ADD
      </button>
    </form>
  );
}