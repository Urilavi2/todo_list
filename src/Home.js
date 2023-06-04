import TaskList from "./TaskList";
import useFetch from "./useFetch"
import "./TaskList"




const Home = () => {
    const { data: openTasks, isPending, error } = useFetch('http://localhost:8000/open'); // 
    //const { data: done, isPending,error } = useFetch('http://localhost:8000/done');

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <TaskList Tasks={openTasks} title="Open Tasks To Do!" />}
        </div>
    );
} 
 
export default Home;