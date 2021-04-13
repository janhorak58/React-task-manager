import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e)=> {
        console.log(e);
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="black" text = "add"></Button>
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
