import React, { useState } from 'react';
import { Plus, MoreVertical, User, Calendar, Flag } from 'lucide-react';
import { mockTasks, Task } from '../data/mockData';

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-700' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900' },
    { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900' },
    { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900' }
  ];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: Task['status']) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Project Board
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your team's progress and manage tasks efficiently
          </p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id as Task['status'])}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${column.color.replace('bg-', 'bg-').replace('dark:bg-', 'dark:bg-')}`}></div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {column.title}
                </h3>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                  {getTasksByStatus(column.id as Task['status']).length}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Tasks */}
            <div className="space-y-3">
              {getTasksByStatus(column.id as Task['status']).map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 cursor-move hover:shadow-sm transition-shadow border border-gray-100 dark:border-gray-600"
                >
                  {/* Priority Flag */}
                  <div className="flex items-start justify-between mb-2">
                    <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                      <MoreVertical className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Task Content */}
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {task.description}
                  </p>

                  {/* Task Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Card Button */}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add a card
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Team Members
        </h3>
        <div className="flex flex-wrap gap-3">
          {['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson'].map((member, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {member.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-sm text-gray-900 dark:text-white">{member}</span>
            </div>
          ))}
          <button className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Add member</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kanban;