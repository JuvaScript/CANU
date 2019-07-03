import React from 'react';

class BlocksInstruction extends React.Component {

    handleNext = e => {
        e.preventDefault();
        this.props.incrementSubcounter();
    }

    render() {
        return (
            <div>
                <h1>Instruction Blocks</h1>

                <button
                    className="next-btn"
                    onClick={this.handleNext}
                >
                    Zur Aufgabe
                  </button>
            </div>

        )
    }


}

export default BlocksInstruction;