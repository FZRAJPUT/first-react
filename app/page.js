
"use client";
import React, { useState } from 'react';

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.length === 0) {
      alert("Add Task First");
      return;
    }

    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };  

  return (
    <div className='main'>
      <div className='up'>
        <input 
          id='inp' 
          type='text' 
          placeholder='Add Task' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask} id='btn'>ADD</button>
      </div>

      <div className='tasks'>
        {tasks.map((task, index) => (
          <div key={index} className='task'>
            <h3>{task}</h3>
            <p onClick={() => removeTask(index)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
