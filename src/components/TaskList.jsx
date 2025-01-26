import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions';
import { MdDelete } from 'react-icons/md';

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Your Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border-b last:border-none"
            >
              <span>
                {task.task} <span className="text-sm text-gray-500">({task.priority})</span>
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
