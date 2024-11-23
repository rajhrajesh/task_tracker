import React, { useState } from 'react';
import TaskEditModal from './TaskEditModal';

const TaskCard = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className="task-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-6 max-w-sm mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <p className="text-sm text-gray-500 mb-2">Due: {task.dueDate}</p>
      <p className="text-sm text-gray-500 mb-4">Status: 
        <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-500' : task.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
          {task.status}
        </span>
      </p>
      <div className="mt-4 flex justify-between gap-4">
        <button
          onClick={handleEdit}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
        >
          Delete
        </button>
      </div>
      {isEditing && (
        <TaskEditModal
          task={task}
          onClose={() => setIsEditing(false)}
          onSave={onUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskCard;
