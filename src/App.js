import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TaskList  from './component/TaskList/TaskList';

import { requestTasks, startDragTask, finishDragTask, dragTaskEnter, addTask, changeTaskTitle } from './App.action';

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    status: state.status
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (taskTitle, status) => dispatch(addTask(taskTitle, status)),
    onRequestTasks: () => dispatch(requestTasks()),
    onDragEnter: (id) => dispatch(dragTaskEnter(id)),
    onDragStart: (id) => dispatch(startDragTask(id)),
    onDragEnd:() => dispatch(finishDragTask()),
    onChangeTaskTitle: (id, title) => dispatch(changeTaskTitle(id, title))
  }
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestTasks();
  }

  render() {
    const lists = [];
    for (let status of this.props.status){ 
      let statusId = status.id;
      let tasks = this.props.tasks.filter(n => n.statusId === statusId);
      lists.push((
        <div key={statusId} className="dib v-top stage fl w-third" onDrop={this.dropcallback} onDragEnter={e => this.props.onDragEnter(statusId)} >
          <h1>{ status.name }</h1>
          <TaskList className="fl w-100" tasksList={tasks}
            status={statusId}
            start={this.props.onDragStart}
            end={this.props.onDragEnd}
            callback={this.props.onDragEnd}
            add={this.props.onAddTask}
            changeTastTitle = {this.props.onChangeTaskTitle} />
        </div>
      ));
    }

    return (
      <div className="App fl w-70">
        {lists}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
