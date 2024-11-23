import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => (
  <div className="flex flex-wrap justify-around gap-4 p-6">
    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    ))}
  </div>
);

export default TaskList;
