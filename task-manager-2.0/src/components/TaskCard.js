/* COMPONENT: TaskCard
   PURPOSE: Displays a single item with toggle/delete buttons.
   TYPE: Client Component (needs onClick)
*/
'use client';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-foreground/5">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded border ${task.done ? 'bg-neon-green border-neon-green' : 'border-gray-500'}`}
        />
        <span className={task.done ? 'line-through opacity-40' : ''}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500 text-sm">Delete</button>
    </div>
  );
}