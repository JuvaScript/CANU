import React from "react";

import axios from "axios";

import Tasks from "./Tasks";
import APM from "./APM";

class StudySequence extends React.Component {
  state = {
    count: 0,
    tasks: []
  };

  incrementSequenceCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    // get study and group specific tasks
    axios
      .get(
        `/solution/${this.props.match.params.studyid}/${
          this.props.match.params.groupid
        }`
      )
      .then(res => {
        this.setState({
          tasks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    // var arr = [<Tasks tasks={this.state.tasks} incrementSequenceCounter={this.incrementSequenceCounter} />, <Questionnaire incrementSequenceCounter={this.incrementSequenceCounter} count={this.state.count} total={this.state.tasks.length + 1} tasks={this.state.tasks} />]
    // return <div>{this.randomize(arr)}</div>;

    return (
      <APM
        incrementSequenceCounter={this.incrementSequenceCounter}
        count={this.state.count}
        total={this.state.tasks.length + 4}
        tasks={this.state.tasks}
      />
    );
  }
}

export default StudySequence;
