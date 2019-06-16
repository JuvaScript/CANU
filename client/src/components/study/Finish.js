// End Page Component after finishing all tasks

import React from 'react';

import './Finish.css';

import Header from "../layout/Header";
import Confetti from 'react-confetti'

const Finish = () => {
    return (
        <div>
            <Confetti />
            <Header />
            <div className="finished-text-wrapper">
                <h2 className="finished-text">Thank you for participating!</h2>
            </div>
        </div >
    )

}

export default Finish;