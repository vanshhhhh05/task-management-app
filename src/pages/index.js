import { useState, useEffect, useRef } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export async function getServerSideProps() {
  const tasks = [
    // { id: 1, title: 'Buy groceries', description: 'Get milk and eggs', priority: 'high', completed: false },
    // { id: 2, title: 'Study JavaScript', description: 'Complete tutorial on Next.js', priority: 'medium', completed: false },
    // { id: 3, title: 'Exercise', description: 'Go for a 30-minute run', priority: 'low', completed: false }
  ];
  
  return {
    props: { initialTasks: tasks },
  };
}

export default function Home({ initialTasks = []}) {
  const [tasks, setTasks] = useState([]);
  const [taskToBeEdit, setTaskToBeEdit] = useState(null);
  const isInitialRender = useRef(true); 

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      // If tasks exist in localStorage, use them
      setTasks(JSON.parse(savedTasks));
    } else {
      // If no tasks in localStorage, use initialTasks from server-side props
      setTasks(initialTasks);
    }
  }, [initialTasks]);
  
  useEffect(() => {
    if (isInitialRender.current) {
      // Skip the initial mount
      isInitialRender.current = false;
      console.log('ignore initial render')
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToBeEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleClickOnEditTask = (task) => {
    setTaskToBeEdit(task);
  }

  const handleCancelEditing = () => {
    setTaskToBeEdit(null);
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; // Move completed tasks to the bottom
    }
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div>
      <div className='flex'>
        <TaskList 
          tasks={sortedTasks} 
          editTask={handleClickOnEditTask} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
        <TaskForm addTask={addTask} taskToBeEdit={taskToBeEdit} handleEditTask={editTask} handleCancelEditing={handleCancelEditing} />
      </div>
    </div>
  );
}
