import { useState, useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/visibilityControl'

function App() {
  
  const [taskItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
     let data =  localStorage.getItem('tasks')
     if(data){
      setTasksItems(JSON.parse(data))
     }
  }, []);

  const cleanTasks = () => {
     setTasksItems(taskItems.filter(task => !task.done))
     setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [ taskItems ])
  
  //alert(taskName)

  function createTask(taskName){
    //console.log(taskName)
    if (!taskItems.find(task => task.name === taskName)){
        setTasksItems([...taskItems, {name:taskName, done: false}])
    }
  }

  const toggleTask = task => {
      setTasksItems(
        taskItems.map(t => (t.name == task.name) ? {...t, done: !t.done} : t)
      )
  }



  return (
    <>
      <div className="container bg-dark text-white col-md-4 offset-md-4 p-5 mt-5" >
         <TaskCreator createTask={createTask}/>
         <h2 className='text-center'>Tareas Por Hacer</h2>
         <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
      <br />
      <h2 className='text-center'>Tareas Completadas</h2>
         <VisibilityControl 
        isChecked = {showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)} 
        cleanTasks={cleanTasks} 
        />
        {
          showCompleted === true && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
          )
        }
      </div>
      
    </>
  )
}

export default App