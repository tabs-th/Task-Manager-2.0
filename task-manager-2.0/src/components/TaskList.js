/* ══════════════════════════════════════════════════════
   COMPONENT: TaskList
   PURPOSE:  This component takes the array of gear and loops 
             through them to render a TaskCard for each one.
   TYPE:     Functional Component
   PROPS:    tasks (the filtered array), onToggle, onDelete
   ══════════════════════════════════════════════════════ */
import TaskCard from './TaskCard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  /* RUBRIC: Conditional Rendering
     Why: If the list is empty, show a message instead of a blank screen. */
  if (tasks.length === 0) return <p className="text-gray-500 text-center py-4">No items found.</p>;

  return (
    <div>
      {tasks.map(t => (
        <TaskCard key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}