import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToDo } from '../../actions/actionCreator';

import FilterButtons from '../filters/filters';
import Input from '../input/input';
import List from '../list/list';

import './main.css'

class TODO extends Component {
    state = {
        filter: 'all',
        taskText: ''
    }

    handleInputChange = ({ target: { value } }) => {
      this.setState({
        taskText: value,
      })
    }

    addToDo = ({ key }) => {
      const { taskText } = this.state;

      if (taskText.length > 3 && key === 'Enter') {
        const { addToDo } = this.props;

        addToDo((new Date()).getTime(), taskText, false);

        this.setState({
          taskText: '',
        })
      }
    }

    render() {
        const { filter, taskText } = this.state;
        const { tasks } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="wrapper">
                {isTasksExist && <FilterButtons count={tasks.length} active={filter} />}
                {isTasksExist && <List tasksList={tasks} />}
              <Input onKeyPress={this.addToDo} onChange={this.handleInputChange} value={taskText}/>
            </div>
          );
    }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addToDo })(TODO);