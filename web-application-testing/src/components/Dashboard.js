import React from 'react';

const Dashboard = (props) => {
    // const {strikeScore, ballScore, foulScore, hitScore} = props.play
    console.log(props)
    return (
        <div>
            <button onClick={props.strike}>STRIKE</button>
            <button onClick={props.ball}>BALL</button>
            <button onClick={props.foul}>FOUL</button>
            <button onClick={props.hit}>HIT</button>
        </div>
    )
}

export default Dashboard