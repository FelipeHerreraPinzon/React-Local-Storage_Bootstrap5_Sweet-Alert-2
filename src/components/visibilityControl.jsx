import Swal from "sweetalert2"


export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        Swal.fire({
            title: '¿Seguro de eliminar la tareas completadas?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                cleanTasks()
                Swal.fire(
                    'Eliminado',
                    'La tareas completadas han sido eliminadas',
                    'success'
                )
            }
        })
    }
    return(
    
     <div className="d-flex justify-content-between text-white text-center p-2 bg-secondary">
        <div className="form-check form-switch">
        <input type="checkbox" 
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        className="mx-2 form-check-input fs-4"
        />{" "}
        <label>Mostrar Tareas Completadas</label>
        </div>
        <button onClick={handleDelete} className="mx-2 btn btn-danger btn-sm fs-5">
            Limpiar
        </button>
      </div>
    )
}
