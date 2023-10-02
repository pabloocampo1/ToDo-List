

import { useReducer, useRef } from "react"
import ListTask from "./ListTask";
import AddTask from './addTask'
import '../stylesComponents/form-task.css'
//import MesageNoTask from './mesageNoTask'


const FormTask = () => {
    
    const inputRef = useRef()

    

    const [task, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add-task':{
                return [
                    ...state,
                    {
                        title: action.title,
                        id: state.length,
                        completada: false,
                    }
                ]
            }
            case 'deleted-task':{
                return state.filter((task, index) => index != action.index)
            }
            case 'completada':{
                return state.map((task, index) =>
                index === action.payload ? { ...task, completada: true } : task
              );
            }
            
        }
        
        
    });

    

    const handleFocus = () => {
        inputRef.current.focus()
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputRef.current.value == 0) return
        dispatch({
            type: 'add-task',
            title: inputRef.current.value
        })
        inputRef.current.value = ''
    };

    return (
        <div className="form-task">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="write task" className="input-task" ref={inputRef} />
                <button onClick={handleFocus}>
                    Save
                </button>
            </form>
            <ListTask task={task} dispatch={dispatch} />
            <AddTask inputRef={inputRef}/>
            
   
  
        </div>
    )
}


export default FormTask
