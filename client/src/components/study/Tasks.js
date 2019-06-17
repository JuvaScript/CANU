// Tasks Component for handling individual study sequence

import React from 'react';

import axios from 'axios';
import NewWords from './NewWords';
import Blocks from './Blocks';

class Tasks extends React.Component {
    state = {
        counter: 0,
        tasks: []
    }

    // componentDidMount() {

    //     // get study and group specific tasks
    //     axios.get(`/solution/${this.props.match.params.studyid}/${this.props.match.params.groupid}`)
    //         .then(res => {
    //             this.setState({
    //                 tasks: res.data,
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }

    // method to be passed to child components to externally update tasks counter
    incrementCounter = () => {
        // this.props.incrementSequenceCounter();

        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log(this.props)
        if (this.props.tasks.length === 0) {
            return <div></div>
        }
        // if (this.state.tasks.length === 0) {
        //     return <Questionnaire />
        // }
        else {
            if (this.props.tasks[this.state.counter].task_type === 'Tetris') {
                return <Blocks counter={this.state.counter} total={this.props.tasks.length} tasks={this.props.tasks} incrementCounter={this.incrementCounter} />
            } else if (this.props.tasks[this.state.counter].task_type === 'Neue_Wörter') {
                return <NewWords counter={this.state.counter} total={this.props.tasks.length} tasks={this.props.tasks} incrementCounter={this.incrementCounter} />
            }
        }

    }
}

export default Tasks;
