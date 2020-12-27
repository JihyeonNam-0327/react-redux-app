import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)}></input>
      <input type="button" value="add" onClick={() => addTask(task)}></input>
      <ul>
        {
          tasks.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}