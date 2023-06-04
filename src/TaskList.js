const TaskList = (Tasks,title) => {
    return ( 
        <div className="Task-List">
            <h2>{title}</h2>
            {Tasks.map((Task => {
                <div className="taskDetails" key={Task.id}>
                    <h2>{Task.title}</h2>
                    <p>Written by {Task.author}</p>
                </div>
            }))}
        </div>

     );
}
 
export default TaskList;