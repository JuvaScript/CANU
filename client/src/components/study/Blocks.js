// Blocks Task Component, currently work in progress

import React from 'react';
import './Blocks.css';

import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Draggable from 'react-draggable';
import { ProgressBar } from "react-step-progress-bar";

class Blocks extends React.Component {

    // setting up individual tetrominos and board
    state = {
        tasks: this.props.tasks,
        pieces: [
            {
                jPiece: [
                    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                    0
                ],

            },
            {
                iPiece: [
                    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    0
                ]
            },
            {
                oPiece: [
                    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    0
                ]
            },
            {
                lPiece: [
                    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    0
                ]
            },
            {
                tPiece: [
                    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
                    0
                ]
            },
            {
                sPiece: [
                    [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                    0
                ]
            },
            {
                zPiece: [
                    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    0
                ]
            }
        ],

        board: [...Array(100)],
        // boardTemplate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // boardTemplate: (this.props.tasks[this.props.counter].task).map((number) => console.log(Number(number.replace(/ /g, '')))),
        // rawBoardTemplate: this.props.tasks[this.props.counter].task,
        boardTemplate: [],
        boardActive: [],

        boardExample: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],

        index: 0
    };

    componentDidMount() {
        this.setData();

    };

    // update component with data of new configuration
    componentDidUpdate(prevProps) {
        if (this.props.counter !== prevProps.counter) {
            this.setData()
        }
    }

    setData() {
        this.convertBoardTemplate();
        // console.log('triggered')
    }

    // method to convert fetched board matrix into right data format
    convertBoardTemplate() {
        let boardTemplate = [...this.props.tasks[this.props.counter].task];

        // let boardTemplate = [...this.state.rawBoardTemplate];
        let convertedBoardTemplate = boardTemplate.map((number) => (
            (number.split(' ')).map(Number))
        )

        this.setState({
            boardTemplate: convertedBoardTemplate.flat(),
            boardActive: convertedBoardTemplate.flat()
        })

    };

    // save data of dragged item
    onDragStart = e => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', e.target.id);
        // e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    handleDrop = e => {
        const pieceOrder = e.dataTransfer.getData('text');
        //   // console.log(document.getElementById(pieceOrder));
        //   e.target.appendChild(document.getElementById(pieceOrder));
        //   // console.log(pieceOrder);



        // let tmp = document.createElement("span");
        // tmp.className = 'hide';
        // let parent = e.target.parentNode;
        // parent.insertBefore(tmp, e.target);
        // let parent2 = (document.getElementById(pieceOrder)).parentNode;
        // parent2.insertBefore(e.target, (document.getElementById(pieceOrder)));
        // tmp.replaceWith(document.getElementById(pieceOrder));


        e.target.replaceWith(document.getElementById(pieceOrder));
        e.target.remove();
    }


    renderPieceContainer(piece, index) {
        return (
            <li key={index}></li>
        );
    }

    // Render Board Cells
    renderEmptyBoardCell(i) {
        return (
            <li key={i} className="emptyBoardCell" onDragOver={(e) => e.preventDefault()}
            // onDrop={(e) => this.handleDrop(e)}
            ></li>
        );
    }

    renderTemplateBoardCell(i) {
        return (
            <li key={i} className="templateBoardCell" onDragOver={(e) => e.preventDefault()}
            // onDrop={(e) => this.handleDrop(e)}
            ></li>
        );
    }

    // Render Piece Cells
    renderEmptyCell(i) {
        return (
            <li key={i} className="emptyCell"></li>
        );
    }

    renderFilledCell(piece_config, i, counter) {
        return (
            <li key={i} id={counter} className={`filledCell ${piece_config}`}
            // draggable onDragStart={this.onDragStart}
            ></li>
        );
    }

    logArray() {
        this.state.pieces.map(piece => {
            return Object.keys(piece).map(piece_config => {
                return console.log(piece[piece_config][0])
            })
        });
    }

    // Method for rotation on click
    handleClickRotation = (piece, piece_config, j) => {
        // console.log(piece, piece_config, j)
        // console.log(piece[piece_config].length);
        // console.log((piece[piece_config][(piece[piece_config].length - 1)]))


        let rotationCounter = (piece[piece_config][(piece[piece_config].length - 1)]);
        // console.log(rotationCounter)
        let newState = Object.assign({}, this.state);
        // console.log(newState.pieces[j][piece_config][(piece[piece_config].length - 1)]);

        (newState.pieces[j][piece_config][(piece[piece_config].length - 1)]) = (1 + rotationCounter) % ((piece[piece_config].length) - 1);
        // newState.pieces[piece_config][1].title = ++rotationCounter;
        // console.log(rotationCounter, 5 % ((piece[piece_config].length) - 1))

        this.setState(newState);

    }

    // render tetrominos
    renderPieces() {
        let counter = 0;

        return (

            this.state.pieces.map((piece, j) => {
                return Object.keys(piece).map((piece_config, i) => {
                    // console.log((Object.values(piece))[0], piece_config)
                    // console.log(piece[piece_config].length - 1, piece_config)
                    // console.log((piece[piece_config][(piece[piece_config].length - 1)]))

                    return (
                        <Grid key={i} item xs={4}>
                            <Draggable>
                                <ul className="pieceTray"
                                // onClick={() => this.handleClickRotation(piece, piece_config, j)}
                                >
                                    {(piece[piece_config][(piece[piece_config][(piece[piece_config].length - 1)])].map((cell, i) => {
                                        counter++
                                        return ((cell === 1) ? this.renderFilledCell(piece_config, i, counter) : this.renderEmptyCell(i))
                                    }
                                    ))}
                                </ul>
                            </Draggable>
                        </Grid>
                    )
                })
            })

        )
    }

    // return Object.keys(item).map(date => {
    //   return (
    //     <div>
    //       <h1>{date}</h1>
    //       {item[date].map(time => {
    //         return <h3>{time}</h3>
    //       })}
    //     </div>

    // 

    // handle next button click
    handleNext = (e) => {
        e.preventDefault();

        // let { counter, total } = this.state;
        let { counter, total } = this.props;

        if (counter === total) {
            // push to finished page when all tasks are completed
            this.props.history.push("/finished");
            // alert("Thanks for participating!")
        } else {
            // increment counter on parent component (Tasks)
            this.props.incrementCounter();
            // this.setData();
            // this.setData(counter);

            // this.setState({
            //     values: ['']
            // });
        }

    }

    render() {
        console.log(this.props.counter, this.props.total)
        console.log(this.state.boardTemplate);

        this.logArray();
        return (
            <div className="Blocks">
                <ProgressBar
                    percent={((this.props.counter + 1) / this.props.total) * 100}
                    filledBackground="linear-gradient(to right, rgb(114, 182, 225), #3198D7)"
                />

                <div className="blocks-description">
                    <div className='wrapper'>
                        <div className="task-heading">
                            <span className="task-number-blocks">1</span>
                            <h1 className="blocks-heading">Blocks</h1>
                        </div>
                        <p className="blocks-task-description">Fill in the given form with tetrominoes.</p>
                    </div>

                </div>
                {/* <ul className="Tray_lelbow">
              {
                this.state.pieces[0].lPiece[0].map((piece) =>
                  ((piece === 1) ? this.renderFilledCell() : this.renderEmptyCell())
                )
              }
            </ul> */}

                <Grid container spacing={16} justify="space-around" alignItems="center">
                    <Grid item xs={4}>
                        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
                            {this.renderPieces()}
                        </Grid>

                    </Grid>
                    <Grid item xs={5}>
                        <ul className="Board">
                            {
                                this.state.boardTemplate.map((cell, i) =>
                                    ((cell === 1) ? this.renderTemplateBoardCell(i) : this.renderEmptyBoardCell(i))
                                    // this.renderPieceContainer(piece, i))
                                )}
                        </ul>
                    </Grid>
                </Grid>
                <div className="blocks-next-btn-wrapper">
                    {this.props.counter === this.props.total ?
                        <button className='blocks-next-btn' onClick={this.handleNext}>Finish</button>
                        :
                        <button className='blocks-next-btn' onClick={this.handleNext}>Next</button>
                    }
                </div>

            </div>
        );
    }
}

export default Blocks;
