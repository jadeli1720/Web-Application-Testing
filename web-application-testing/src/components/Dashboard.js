import React from 'react';

const Dashboard = (props) => {
    const {strike, ball, foul, score} = props.play
    return (
        <div>
            <button onClick={strike}>STRIKE</button>
            <button onClick={ball}>BALL</button>
            <button onClick={foul}>FOUL</button>
            <button onClick={score}>HIT</button>
        </div>
    )
}

export default Dashboard