import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Do something",
        day: "today",
        reminder: "true",
    },
    {
        id:2,
        text: "Do something else",
        day: "tomorow",
        reminder: "false",
    },
  ])

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? {...task, reminder:!task.reminder} :task))
  }
  return (
    <div className="container">
        <Header title="hello"></Header>
        <h1>Hello</h1> 
        {tasks.length > 0 ?  <Tasks  tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}></Tasks> : "You have no task to do."}
        <Footer></Footer>


    </div>
  );
}

export default App;
