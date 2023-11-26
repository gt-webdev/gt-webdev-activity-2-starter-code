import React from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8081/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.result));
  }, []);

  return (
    <div>
      <h1>TODO LIST APPLICATION</h1>
      <p>Raw data from server: {JSON.stringify(tasks)}</p>
      <p>Example way to parse data from server:</p>
      <div>
        { tasks &&
          <>
            {
              tasks.map((task) => {
                  return (
                    <div key={task._id}>
                      <input type="checkbox" id={task._id} name={task._id} value={task._id} checked={task?.completed || false}/>
                      <label for={task._id}>{task.name}</label>
                    </div>
                  );
              })
            }
          </>
        }
      </div>
    </div>
  );
}

export default App;
