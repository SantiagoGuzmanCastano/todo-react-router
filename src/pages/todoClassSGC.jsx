import { useState } from "react"
import "./todoClassSGC.css"

const TodoClassSGC = () => {

    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const onChange = (e) => {
        setNewTask(e.target.value)
    }

    const onClick = () => {
        if (newTask.trim() === "") return; // evita tareas vacías
        const newTasks = [...tasks, { id: Date.now(), text: newTask }];
        setTasks(newTasks);
        setNewTask("") // ✅ borra el input al guardar
    }

    const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); // ✅ elimina la tarea
    }
return (
    <div className="todo-wrapper">   
        <h1>Todo Class</h1>
        <div className="todo-input-row">
            <input 
                type="text" 
                value={newTask}        
                onChange={onChange}
                placeholder="Escribe una tarea..."
                onKeyDown={(e) => e.key === "Enter" && onClick()}
            />
            <button onClick={onClick}>Guardar</button>
        </div>

        <div className="tasks-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <input 
                        type="checkbox" 
                        onChange={() => onDelete(task.id)}
                    />
                    <p>{task.text}</p>
                    <button className="delete-btn" onClick={() => onDelete(task.id)}>✕</button>
                </div>
            ))}
        </div>
    </div>
)
}

export default TodoClassSGC