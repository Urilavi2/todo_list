import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import axios from "axios";


const Home = () => {
  const baseURL = "http://localhost:3080";
    const [Tasks, setTasks] = useState([])

    useEffect (() => {
        getTasks()
    },[])

    const getTasks = () =>  // THE FETCH
    {
        axios.get(`${baseURL}/Tasks`).then((res) => {console.log(res.data.Tasks);setTasks(res.data.Tasks)}).catch((err) => console.error(err))
    }

    const addTask = (Task) => {
        console.log(Task)
        axios.post(`${baseURL}/Tasks`, {Task, done: "Click if done", doneflag: false},)
        .then((res => {setTasks([...Task, res.data.Task])})).catch((err) => console.log(err))
    }


    return (  
        <div className="Home">
            {Tasks && <TaskList Tasks={Tasks} setTasks = {setTasks} addTask={addTask} />}
            
            
        </div>
    );
} 
 
export default Home;