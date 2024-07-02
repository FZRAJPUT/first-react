"use client";
import React, { useState } from 'react';

const getCurrentDateTime = () => {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit'
  };
  return now.toLocaleDateString(undefined, options);
};

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.length === 0) {
      alert("Add Task First");
      return;
    }

    const newTask = {
      text: inputValue,
      dateTime: getCurrentDateTime()
    };

    setTasks([...tasks, newTask]);
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
            <section>
            <h3>{task.text}</h3>
            <p onClick={() => removeTask(index)} style={{cursor: 'pointer'}}>X</p>
            </section>
            <div className='dat'>{task.dateTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

