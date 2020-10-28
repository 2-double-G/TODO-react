import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToDo, deleteToDo, completeToDo, changeFilter } from '../../actions/actionCreator';

import FilterButtons from '../filters/filters';
import Input from '../input/input';
import List from '../list/list';

import './main.css'

class TODO extends Component {
    state = {
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

    filterTasks = (tasks, active) => {
      switch (active) {
        case 'completed':
          return tasks.filter(task => task.done);
        case 'active':
          return tasks.filter(task => !task.done);
        default:
          return tasks;
      }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.done).length;


    render() {
        const { taskText } = this.state;
        const { tasks, deleteToDo, completeToDo, filters, changeFilter } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const taskCounter = this.getActiveTasksCounter(tasks);

        return (
            <div className="wrapper">
                {isTasksExist && <FilterButtons changeFilter={changeFilter} count={taskCounter} active={filters} />}
                {isTasksExist && <List completeToDo={completeToDo} tasksList={filteredTasks} deleteToDo={deleteToDo}/>}
              <Input onKeyPress={this.addToDo} onChange={this.handleInputChange} value={taskText}/>
            </div>
          );
    }
}

export default connect(({ tasks, filters}) => ({
  tasks,
  filters
}), { addToDo, deleteToDo, completeToDo, changeFilter })(TODO);