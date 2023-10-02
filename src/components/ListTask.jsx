import PropTypes from 'prop-types'
import MesageNoTask from './mesageNoTask'
import '../stylesComponents/content-tasks.css'


const ListTask = ({ task, dispatch }) => {
    return (
        <div className='container-list-task'>
            {task < [0] ? <MesageNoTask />
                        : task && task.map((item, index) => (
                            <div className='content-tasks'style={{
                                textDecoration: item.completada ? 'line-through' : 'none',
                                background: item.completada ? 'rgb(128, 124, 187)' : 'none',
                            }} key={index}>
                                <button className='button-completa' onClick={() =>  dispatch({ type: 'completada', payload: index })}>
                                    <img src="https://i.imgur.com/GwStPmg.png" alt="" />
                                </button>
                                <div>
                                    <p>{item.title}</p>
                                </div>
                                <button onClick={() => dispatch({
                                    type: 'deleted-task',
                                    index: index
                                })}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/1522/1522068.png" alt="" />
                                </button>
                                
                            </div>
                        
                ))
                               }
                
                

        </div>
    )
}

ListTask.propTypes = {
    task: PropTypes.array,
    dispatch: PropTypes.func
}

export default ListTask

