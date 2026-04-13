/* ══════════════════════════════════════════════════════
   COMPONENT: TaskCard
   PURPOSE:  Displays a single gear item and sends data back to TaskBoard with toggle/delete
   TYPE:     Client Component ('use client') - because it uses onClick
   PROPS:    task (the object), onToggle, onDelete (callback functions)
   ══════════════════════════════════════════════════════ */
'use client';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-foreground/5">
      <div className="flex items-center gap-3">
        {/* RUBRIC: Callback Prop 
            Why: Calls onToggle, and actual logic is in TaskBoard. */}
        <button 
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded border transition-colors ${
            task.done ? 'bg-neon-green border-neon-green' : 'border-gray-500'
          }`}
        />
        
        {/* RUBRIC: Conditional Rendering
            Why: Applies line-through class and gives visual feedback. */}
        <span className={task.done ? 'line-through opacity-40 italic' : 'text-foreground font-medium'}>
          {task.title}
        </span>
      </div>

      {/* RUBRIC: Callback Prop for Delete
          Why: Similar to toggle, this signals the TaskBoard to .filter() 
          this specific ID out of the main state. */}
      <button 
        onClick={() => onDelete(task.id)} 
        className="text-red-500 text-xs font-bold uppercase tracking-widest hover:text-red-400"
      >
        Delete
      </button>
    </div>
  );
}