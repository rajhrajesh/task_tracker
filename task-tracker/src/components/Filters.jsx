import React, { useState, useEffect } from 'react';

const Filters = ({ tasks, setFilteredTasks }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    let updatedTasks = [...tasks];

    // Apply the filter
    if (filterStatus !== 'All') {
      updatedTasks = updatedTasks.filter((task) => task.status === filterStatus);
    }

    // Apply the sorting
    updatedTasks.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredTasks(updatedTasks);
  }, [filterStatus, sortOrder, tasks, setFilteredTasks]);

  return (
    <div className="filters p-6 bg-white rounded-lg shadow-xl mb-6 max-w-lg mx-auto">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-800 mb-2">Status:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Sort by Due Date:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
