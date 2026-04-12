/* COMPONENT: TaskBoard
  PURPOSE: Holds main tasks and distributes data to other files, like a hub. 
  TYPE: Client Component
  PROPS: None (this is the top-level state holder)
*/
'use client';

import { useState, useEffect } from 'react';

export default function TaskBoard() {
  /* RUBRIC: State declaration & Lazy Initializer
    Why: I'm putting the gear list in state so React knows to update the screen 
    when I add/delete items. I'm using the 'typeof window' check because 
    localStorage only works in the browser, and Next.js tries to run this on 
    the server first which would cause an error.
  */
  const [tasks, setTasks] = useState(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('race-gear');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Running Shoes', done: true },
      { id: '2', title: 'Energy Gels', done: false }
    ];
  });

  /* RUBRIC: Every useEffect explained
    Why: This effect handles 'Persistence'. It watches the [tasks] array 
    and saves the data to localStorage whenever something changes so the 
    user doesn't lose their list on a refresh.
  */
  useEffect(() => {
    localStorage.setItem('race-gear', JSON.stringify(tasks));
  }, [tasks]);

  /* RUBRIC: Derived Value
    Why: These aren't in state because I can just calculate them from the 
    tasks array I already have. This avoids bugs where state gets out of sync.
  */
  const totalItems = tasks.length;
  const packedItems = tasks.filter(t => t.done).length;

  return (
    <div className="bg-card-bg p-6 rounded-xl border border-foreground/10 shadow-lg">
      <header className="mb-6">
        <h1 className="text-2xl font-bold italic text-neon-green uppercase tracking-tight">
          Race Day Checklist <span className="text-foreground not-italic opacity-50">2.0</span>
        </h1>
        <p className="text-sm text-gray-500">
          Status: {packedItems} of {totalItems} items ready for Chicago
        </p>
      </header>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3 p-3 border-b border-foreground/5">
            {/* Visual indicator for 'Done' requirement */}
            <div className={`w-2 h-6 rounded-full ${task.done ? 'bg-neon-green' : 'bg-gray-500'}`} />
            <span className={task.done ? 'line-through opacity-40' : 'font-medium'}>
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}