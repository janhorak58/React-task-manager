import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onClickAdd, showAddTask}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClickAdd} text={showAddTask ? "Close Form" : "Add Task"}  color= {showAddTask ? "red" : "green"} ></Button>
        </header>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Header.defaultProps = {
    title: 'Task Manager'
}
export default Header
