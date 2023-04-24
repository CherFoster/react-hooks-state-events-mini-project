import React from "react";
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
       <Task 
        category={task.category}
        text={task.text}
        key={task.text + task.category}
        onDeleteTask={onDeleteTask}
      />
      ))}
    </div>
  );
}

export default TaskList;
