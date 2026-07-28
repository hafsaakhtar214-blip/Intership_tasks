import { motion } from "framer-motion";


function FilterButtons({
    filter,
    setFilter
}) {


    const buttons = [
        {
            name:"All",
            value:"all"
        },

        {
            name:"Pending",
            value:"pending"
        },

        {
            name:"Completed",
            value:"completed"
        }
    ];



    return (

        <motion.div

            className="filter-buttons"

            initial={{
                opacity:0,
                y:20
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.4
            }}

        >


            {
                buttons.map(button => (

                    <button

                        key={button.value}


                        className={
                            filter === button.value
                            ?
                            "active-filter"
                            :
                            ""
                        }


                        onClick={()=>
                            setFilter(button.value)
                        }

                    >

                        {button.name}

                    </button>

                ))
            }


        </motion.div>

    );

}


export default FilterButtons;