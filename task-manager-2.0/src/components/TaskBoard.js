/* COMPONENT: TaskBoard
   PURPOSE: The "Brain" of the app. It holds the main gear list and 
            passes functions down to everything else.
   TYPE: Client Component
*/
'use client';

import { useState, useEffect } from 'react';
// We have to import the pieces we built so they show up!
import AddTaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {
  const [mounted, setMounted] = useState(false);
  
  const [tasks, setTasks] = useState(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('race-gear');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Running Shoes', done: true },
      { id: '2', title: 'Energy Gels', done: false }
    ];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    localStorage.setItem('race-gear', JSON.stringify(tasks));
  }, [tasks]);

  // HANDLERS: These are the functions that let us actually interact
  const addTask = (title) => setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const clearDone = () => setTasks(tasks.filter(t => !t.done));

  // DERIVED VALUE: This handles the All/Active/Done filtering
  const visibleTasks = tasks.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  if (!mounted) return null;

  return (
    <div className="bg-card-bg p-6 rounded-2xl border border-foreground/10 shadow-xl">
      <h1 className="text-3xl font-black italic text-neon-green mb-6 uppercase">Race Prep</h1>
      
      {/* 1. The Input Form */}
      <AddTaskForm onAdd={addTask} />
      
      {/* 2. The Stats & Filters */}
      <TaskStats 
        tasks={tasks} 
        filter={filter} 
        setFilter={setFilter} 
        onClear={clearDone} // This sends the 'clearDone' logic down as the 'onClear' prop
      />
      
      {/* 3. The actual List of gear */}
      <TaskList 
        tasks={visibleTasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
      />
    </div>
  );
}