import { useState } from 'react'

export const TaskCreator = ({createTask}) => {
 
  const [newTaskName, setnewTaskName] = useState("")

  const handleSubmit = (e) => {
     e.preventDefault();
     createTask(newTaskName)
     setnewTaskName("")
  };

    return(
      <form onSubmit={handleSubmit} className='my-2 row'>
        <div className="col-9">
        <input type="text" 
        placeholder='Ingresa nueva tarea' 
        required
        value={newTaskName}
        onChange={(e) => setnewTaskName(e.target.value)}
        className="form-control"
    />
        </div>

        <div className="col-3">
        <button className="btn btn-success btn-sm fs-5">Agregar</button>
        </div>
      </form>
    )
}