import { useState } from "react"
import styles from './ToDoList.module.css'


function ToDoList () {

   const [tasks,setTasks] = useState(["Fight", "Study", "Cook"]);
   const [newTask,setNewTask] = useState("");


   function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
       event.preventDefault(); 
       handleAddTask(); 
    }
 }

   function handleRemoveTask (index){
    setTasks((t) => t.filter((_, i) => i !== index));
   }

   function moveTaskUp(index){
    if(index >0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
        setTasks(updatedTask);
    }
   }

   function moveTaskDown(index){
    if(index < tasks.length -1){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
        setTasks(updatedTask);
    }
   }


  return (
    <div className={styles.toDoList}>
        <h2 className={styles.title}>To-Do-List</h2>
        <input className={styles.input}
            type="text" 
            placeholder="Enter a task..." 
            value={newTask}
            onChange={(_) => setNewTask(_.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button className={styles.addButton} onClick={ handleAddTask }>Add</button>
        <ol className={styles.list}>
        {tasks.map((task, index) => (
          <li className={styles.text} key={index}>
            {task}
            <button className={styles.dltButton} onClick={() => handleRemoveTask(index)}>Delete</button>
            <button className={styles.upButton} onClick={() => moveTaskUp(index)}>up</button>
            <button  className={styles.downButton} onClick={() => moveTaskDown(index)}>down</button>
          </li>
        ))}
      </ol>
    </div>
  );
  }

export default ToDoList