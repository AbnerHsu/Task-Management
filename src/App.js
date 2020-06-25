import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TaskList  from './component/TaskList/TaskList';
import { stageMapping } from './stageMapping';

import { requestTasks, startDragTask, finishDragTask, dragTaskEnter } from './App.action';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestTasks: () => dispatch(requestTasks()),
    onDragEnter: (id) => dispatch(dragTaskEnter(id)),
    onDragStart: (id) => dispatch(startDragTask(id)),
    onDragEnd:() => dispatch(finishDragTask())
  }
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestTasks();
  }

  render() {
    const reducer = (acc, current) => acc.findIndex((item) => item.id === current.taskGroupid) < 0 
      ? acc.concat([{ id: current.taskGroupid, name:stageMapping[current.taskGroupid] }]) : acc;

    let group = this.props.tasks.reduce(reducer, []);

    let sort = (item1, item2) => (item1.id >= item2.id) ? 1 : -1;

    const lists = [];
    for (let g of group.sort(sort)) {
      let tasks = this.props.tasks.filter(n => n.taskGroupid === g.id);
      lists.push((
        <div key={g.id} className="dib v-top stage" data-stage={g.id} onDrop={this.dropcallback} onDragEnter={e => this.props.onDragEnter(g.id)} >
          <h1>{ g.name }</h1>
          <TaskList tasksList={tasks}
            start={this.props.onDragStart}
            end={this.props.onDragEnd}
            callback={this.props.onDragEnd} />
        </div>
      ));
    }

    return (
      <div className="App">
        {lists}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
