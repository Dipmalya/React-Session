import Todo from '../../components/Todo.jsx';
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoAction';

const mapStateToProps = state => state;
  
  const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);