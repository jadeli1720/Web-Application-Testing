import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className='Score'>
                <p>Scores: {props.score}</p>
            </div>
            <div className="strikes">
                <p>Strikes: {props.strike}</p>
                <p>Balls: {props.ball}</p>
            </div>
        </div>
    )
}

export default Display;