export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
              <td className="fs-4 d-flex justify-content-between">
                {task.name}
                <input type="checkbox" 
                checked={task.done}
                onChange={() => toggleTask(task)}
                className="form-check-input fs-4"
                />
              </td>
           </tr>
    )
}