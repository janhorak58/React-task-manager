import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/addTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  // Toggle add task form
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
    console.log({showAddTask});
  }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor((Math.random()*1000000 + 1) / Math.random())

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

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
        <Header title="hello" onClickAdd = {toggleShowAddTask} showAddTask={showAddTask}></Header>
        {showAddTask && <AddTask onAdd = {addTask}></AddTask>}
        <h1>Hello</h1> 
        {tasks.length > 0 ?  <Tasks  tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}></Tasks> : "You have no task to do."}
        <Footer></Footer>


    </div>
  );
}

export default App;
