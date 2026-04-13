/* ══════════════════════════════════════════════════════
   COMPONENT: TaskStats
   PURPOSE:  Displays the real-time count of gear items and provides the filtering and 'Clear Done' buttons.
   TYPE:     Functional Component
   PROPS:    tasks (all items), filter (current state),setFilter (setter), onClear (callback)
   ══════════════════════════════════════════════════════ */

export default function TaskStats({ tasks, filter, setFilter, onClear }) {
  /* RUBRIC: Derived Values
     Why: Calculate numbers from the 'tasks' prop during every render. */
  const total = tasks.length;
  const packed = tasks.filter((t) => t.done).length;
  const remaining = total - packed;

  return (
    <div className="mb-6 space-y-4 border-b border-foreground/10 pb-6">
      {/* RUBRIC: Stats Bar Requirement 
          Live display of counts that update automatically as state changes. */}
      <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest">
        <span>Total: {total}</span>
        <span>Active: {remaining}</span>
        <span>Packed: {packed}</span>
      </div>

      <div className="flex items-center gap-2">
        {/* RUBRIC: Filter View Requirement 
            Three buttons that update the 'filter' state in TaskBoard. */}
        {['all', 'active', 'done'].map((f) => (
        //   <button
        //     key={f}
        //     onClick={() => setFilter(f)}
        //     className={`flex-1 py-1 text-[10px] font-bold rounded border transition-all ${
        //       filter === f 
        //         ? 'bg-neon-green text-black border-neon-green' 
        //         : 'border-foreground/20 hover:border-foreground/40'
        //     }`}
        //   >
        //     {f.toUpperCase()}
        //   </button>
        /* Inside your .map() function for the buttons */
        <button
        key={f}
        onClick={() => setFilter(f)}
        className={`flex-1 py-1 text-[10px] font-bold rounded border transition-all ${
            filter === f 
            ? 'bg-[var(--neon-green)] text-black border-[var(--neon-green)]' 
            : 'text-foreground border-foreground/20'
        }`}
        >
        {f.toUpperCase()}
        </button>
          
        ))}

        {/* RUBRIC: Clear Completed Requirement 
            A single action that signals TaskBoard to filter out all done tasks. */}
        <button
          onClick={onClear}
          className="ml-2 text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}