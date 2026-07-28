import TodoItem from "./TodoItem";


function TodoList({
    tasks,
    toggleTask,
    deleteTask,
    editTask
}) {


    return (

        <div className="todo-list">


            {
                tasks.length === 0 ? (

                    <p className="empty-message">
                        No tasks yet. Add something to get started ✨
                    </p>

                )

                :

                (

                    tasks.map(task => (

                        <TodoItem

                            key={task.id}

                            task={task}

                            toggleTask={toggleTask}

                            deleteTask={deleteTask}

                            editTask={editTask}

                        />

                    ))

                )
            }


        </div>

    );

}


export default TodoList;