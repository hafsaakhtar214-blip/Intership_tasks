import "./index.css";

import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";


function App() {


  const [tasks, setTasks] = useState(() => {

    const saved = localStorage.getItem("tasks");

    return saved ? JSON.parse(saved) : [];

  });



  const [filter, setFilter] = useState("all");




  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);







  // Add task

  const addTask = (taskData) => {


    const newTask = {

      id: Date.now(),

      text: taskData.text,

      completed:false,

      priority:taskData.priority,

      category:taskData.category,

      date:taskData.date

    };


    setTasks([
      ...tasks,
      newTask
    ]);


  };







  // Complete task

  const toggleTask = (id)=>{


    setTasks(

      tasks.map(task =>

        task.id === id

        ?

        {
          ...task,
          completed:!task.completed
        }

        :

        task

      )

    );


  };








  // Delete task

  const deleteTask = (id)=>{


    setTasks(

      tasks.filter(

        task=>task.id!==id

      )

    );


  };







  // Edit task

  const editTask=(id,text)=>{


    setTasks(

      tasks.map(task=>

        task.id===id

        ?

        {
          ...task,
          text:text
        }

        :

        task

      )

    );


  };








  // Filtering


  const filteredTasks = tasks.filter(task=>{


    if(filter==="completed")

      return task.completed;



    if(filter==="pending")

      return !task.completed;



    return true;


  });








  // Statistics


  const total = tasks.length;


  const completed = tasks.filter(

    task=>task.completed

  ).length;



  const progress = total === 0

  ? 0

  :

  Math.round(

    (completed / total) * 100

  );







  return (

    <div className="app">



      <main className="workspace">





        {/* Hero Section */}


        <section className="hero">


          <p className="greeting">

            Good Morning 👋

          </p>


          <h1>

            TASK FLOW

          </h1>


          <p className="hero-text">

            Organize your day,
            focus on what matters.

          </p>


        </section>








        {/* Progress */}


        <section className="progress-box">


          <div className="progress-header">


            <h3>
              Today's Progress
            </h3>


            <span>

              {progress}%

            </span>


          </div>





          <div className="progress-bar">


            <div

              className="progress-fill"

              style={{

                width:`${progress}%`

              }}

            >

            </div>


          </div>





          <p>

            {completed} completed out of {total} tasks

          </p>



        </section>









        {/* Add Task */}


        <TodoForm

          addTask={addTask}

        />









        {/* Filters */}


        <FilterButtons

          filter={filter}

          setFilter={setFilter}

        />









        {/* Tasks */}


        <TodoList


          tasks={filteredTasks}


          toggleTask={toggleTask}


          deleteTask={deleteTask}


          editTask={editTask}


        />







      </main>



    </div>

  );


}


export default App;