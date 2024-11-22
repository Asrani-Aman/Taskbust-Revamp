'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Task Giver Dashboard</h1>
        
        <div className="grid gap-6 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Create New Task
          </button>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Posted Tasks</h2>
            {tasks.length === 0 ? (
              <p className="text-gray-400">No tasks posted yet</p>
            ) : (
              <div className="space-y-4">
                {/* Task list will go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}