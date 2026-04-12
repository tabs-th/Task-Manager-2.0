import TaskBoard from '@/components/TaskBoard';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <TaskBoard />
      </div>
    </main>
  );
}