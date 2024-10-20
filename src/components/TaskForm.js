// components/TaskForm.js

import { useEffect, useState } from 'react';

export default function TaskForm({ addTask, taskToBeEdit, handleEditTask, handleCancelEditing }) {
  const initialValues = {
    title: '',
    description: '',
    priority: 'low',
    completed: false,
  }
  const [task, setTask] = useState(initialValues);

  useEffect(() => {
    if (taskToBeEdit) {
      setTask(taskToBeEdit);
    } else {
      setTask(initialValues); // Reset form if no task is being edited
    }
  }, [taskToBeEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      addTask({ ...task, id: Date.now() });
      setTask(initialValues);
    }
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    handleEditTask(task);
    setTask(initialValues);
  }

  return (
    <div className='flex-1'>
      <form onSubmit={taskToBeEdit ? handleUpdateTask : handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        {taskToBeEdit && (
          <button onClick={handleCancelEditing}>{'Cancel'}</button>
        )}
        <button type="submit">{taskToBeEdit ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
}
