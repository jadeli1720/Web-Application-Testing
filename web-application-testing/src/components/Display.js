import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className='Score'>
                <p>Scores: {props.hitScore}</p>
            </div>
            <div className="strikes">
                <p>Strikes: {props.strikeScore}</p>
                <p>Balls: {props.ballScore}</p>
            </div>
        </div>
    )
}

export default Display;