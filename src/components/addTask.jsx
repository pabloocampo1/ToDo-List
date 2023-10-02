import PropTypes from 'prop-types'
import '../stylesComponents/buttonAddTask.css'


const AddTask = ({ inputRef }) => {

  
    
    const handleFocus = () => {
        inputRef.current.focus()
    }
    

    


  return (
    <div className="button-Add-Task">
      <button onClick={handleFocus}>
        +
    </button>
    </div>
  )
}
AddTask.propTypes = {
    inputRef: PropTypes.object
  }

export default AddTask
