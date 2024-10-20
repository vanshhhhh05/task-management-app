
export default function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {

  return (
    <div className="flex-1" >
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ backgroundColor: getTaskColor(task.priority) }}>
            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
function getTaskColor(priority) {
  switch (priority) {
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'green';
    default:
      return 'white';
  }
}
  