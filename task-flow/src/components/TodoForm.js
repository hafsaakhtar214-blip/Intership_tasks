import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import { motion } from "framer-motion";



function TodoForm({ addTask }) {


    const [task, setTask] = useState("");

    const [priority, setPriority] = useState("medium");

    const [category, setCategory] = useState("study");

    const [date, setDate] = useState("");





    const handleSubmit = (e) => {


        e.preventDefault();



        if(task.trim() === ""){

            return;

        }





        addTask({

            text: task,

            priority: priority,

            category: category,

            date: date

        });






        // Clear form

        setTask("");

        setPriority("medium");

        setCategory("study");

        setDate("");

    };







    return (


        <motion.form


            className="todo-form"


            onSubmit={handleSubmit}



            initial={{
                opacity:0,
                y:-20
            }}


            animate={{
                opacity:1,
                y:0
            }}


            transition={{
                duration:.5
            }}


        >





            <input


                type="text"


                placeholder="Add a new task..."


                value={task}


                onChange={(e)=>
                    setTask(e.target.value)
                }


            />








            <select


                value={priority}


                onChange={(e)=>
                    setPriority(e.target.value)
                }


            >

                <option value="high">
                    🔴 High
                </option>


                <option value="medium">
                    🟡 Medium
                </option>


                <option value="low">
                    🟢 Low
                </option>


            </select>








            <select


                value={category}


                onChange={(e)=>
                    setCategory(e.target.value)
                }


            >


                <option value="work">
                    💻 Work
                </option>


                <option value="study">
                    📚 Study
                </option>


                <option value="personal">
                    🏠 Personal
                </option>


                <option value="other">
                    🎯 Other
                </option>


            </select>








            <input


                type="date"


                value={date}


                onChange={(e)=>
                    setDate(e.target.value)
                }


            />








            <button type="submit">


                <FaPlus />

                Add


            </button>





        </motion.form>


    );


}

export default TodoForm;