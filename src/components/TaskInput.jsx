import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/actions';
import toast from 'react-hot-toast';
import { MdAddTask } from 'react-icons/md';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to add tasks.');
      return;
    }
    if (!task) {
      toast.error('Task cannot be empty.');
      return;
    }
    const newTask = { id: Date.now(), task, priority };
    dispatch(addTask(newTask));
    setTask('');
    setPriority('Medium');
    toast.success('Task added!');
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className="border p-2 w-full mb-2 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        onClick={handleAddTask}
        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        <MdAddTask />
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
