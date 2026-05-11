import { useState } from "react"

const TodoClassSGC = () => {

    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const onChange = (e) => {
        // console.dir(e.target.value)
        setNewTask(e.target.value)

    }

    const onClick = () => {
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        setNewTask("")
    }

    return (
        <div>
            <h1>Todo Class</h1>
            <input type="text" onChange={onChange}/><button onClick={onClick}>Guardar</button>
            {tasks.map((task) => <p>{task}</p> )}
        </div>
    )
}

export default TodoClassSGC