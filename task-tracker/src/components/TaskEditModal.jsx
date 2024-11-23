import React, { useState } from 'react';
import '../styles/Task.css';

const TaskEditModal = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="modal-content bg-white rounded-lg p-6 max-w-lg w-full mx-4 sm:mx-8">
        <h3 className="text-2xl font-semibold text-center mb-6">Edit Task</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="status"
            value={editedTask.status}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-actions flex justify-between gap-4 mt-6">
            <button type="submit" className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
              Save
            </button>
            <button type="button" className="w-full sm:w-auto py-2 px-4 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
