import { useState } from "react";

import {
    FaCheck,
    FaTrash,
    FaEdit,
    FaSave,
    FaCalendarAlt
} from "react-icons/fa";

import { motion } from "framer-motion";



function TodoItem({

    task,

    toggleTask,

    deleteTask,

    editTask

}) {



    const [isEditing, setIsEditing] = useState(false);


    const [editText, setEditText] = useState(task.text);





    const handleEdit = () => {


        if(editText.trim() === ""){

            return;

        }


        editTask(
            task.id,
            editText
        );


        setIsEditing(false);


    };







    const getPriorityClass = () => {


        if(task.priority === "high")
            return "high";


        if(task.priority === "medium")
            return "medium";


        return "low";


    };







    return (


        <motion.div



            className={`todo-item ${
                task.completed ? "completed" : ""
            }`}




            initial={{
                opacity:0,
                y:20
            }}



            animate={{
                opacity:1,
                y:0
            }}



            transition={{
                duration:.3
            }}



        >





            <div className="task-left">





                <button


                    className={`check-btn ${
                        task.completed
                        ?
                        "checked"
                        :
                        ""
                    }`}



                    onClick={()=>
                        toggleTask(task.id)
                    }


                >


                    {
                        task.completed &&
                        <FaCheck />
                    }


                </button>









                <div className="task-details">





                    {
                        isEditing ? (


                            <input


                                className="edit-input"


                                value={editText}


                                onChange={(e)=>
                                    setEditText(e.target.value)
                                }


                            />


                        )

                        :


                        (


                            <span className="task-text">

                                {task.text}

                            </span>


                        )

                    }







                    <div className="task-meta">





                        <span

                            className={`priority ${getPriorityClass()}`}

                        >

                            {task.priority === "high" && "🔴 High"}

                            {task.priority === "medium" && "🟡 Medium"}

                            {task.priority === "low" && "🟢 Low"}


                        </span>






                        <span className="category">


                            {task.category === "work" && "💻 Work"}

                            {task.category === "study" && "📚 Study"}

                            {task.category === "personal" && "🏠 Personal"}

                            {task.category === "other" && "🎯 Other"}


                        </span>







                        {
                            task.date &&

                            <span className="date">


                                <FaCalendarAlt />

                                {task.date}


                            </span>

                        }




                    </div>





                </div>





            </div>









            <div className="task-actions">





                {

                    isEditing ?


                    (

                        <button

                            className="save-btn"


                            onClick={handleEdit}

                        >

                            <FaSave />

                        </button>


                    )


                    :


                    (

                        <button

                            className="edit-btn"


                            onClick={()=>
                                setIsEditing(true)
                            }

                        >

                            <FaEdit />

                        </button>


                    )

                }







                <button


                    className="delete-btn"


                    onClick={()=>
                        deleteTask(task.id)
                    }


                >

                    <FaTrash />

                </button>






            </div>






        </motion.div>


    );


}

export default TodoItem;