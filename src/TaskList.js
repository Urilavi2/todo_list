import React, { useState } from "react";


const TaskList = ({Tasks, setTasks, addTask}) => {
    const [title, setTitle] = useState(" ")
    const [body, setBody] = useState(" ")
    const [author, setAuthor] = useState(" ")
    
    const handleClick = (Task) => {
        Task.doneflag = !Task.doneflag
        Task.doneflag ? Task.done = "done!" : Task.done = "Click if done"
        setTasks([...Tasks])
        console.log(Task.doneflag)    
      };


    return ( 
        <div className="Task-List">
            {Tasks.map( Task => (
                <div key={Task.id} className={Task.doneflag ? "done" : "openTask"}>
                    <h2>{Task.title}</h2>
                    <p>Written by {Task.author}</p>
                    <button onClick = {() => handleClick(Task)} >{Task.done}</button>
                </div>
            ))}
            <div className="Create">
                <h4>Add a task to the list: </h4>
                <form >
                    <label>Title:</label>
                <input type="text" reqired="true" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Description: </label>
                <input textarea="true" reqired="true" value={body} onChange={(e)=> setBody(e.target.value)} />
                    <label>Author: </label>
                <input type = "text" reqired="true" value = {author} onChange={(e) => setAuthor(e.target.value)} />
                {<button onClick={(e) => addTask({title,body,author})}>Add Task!</button>}
                </form>
            </div>
        </div>
        
     );
}
 
export default TaskList;