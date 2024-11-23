import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...task, id: Date.now() });
    setTask({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  // Handle focus event to set today's date when the date input is focused
  const handleDateFocus = () => {
    if (!task.dueDate) {
      const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
      setTask((prevTask) => ({ ...prevTask, dueDate: today }));
    }
  };

  return (
    <form
      className="mt-10 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate}
          onChange={handleInputChange}
          onFocus={handleDateFocus} // Fetch today's date on focus
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={task.status}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
