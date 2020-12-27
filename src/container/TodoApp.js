import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

// store에 있는 task, tasks를 props로 전달해주는 역할
function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks
  }
}

// 액션을 dispatch 하는 함수를 props로 전달해주는 역할
function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task))
    },
    inputTask(task) {
      dispatch(inputTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)