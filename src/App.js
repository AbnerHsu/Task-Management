import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Stage from './component/Stage/Stage'

import { requestTasks }  from './App.action';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestTasks: () => dispatch(requestTasks())
  }
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestTasks();
  }

  render(){
    return (
      <div className="App">
        <Stage tasks={this.props.tasks} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
