import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div>
                <p>Scores: {props.score}</p>
            </div>
            <p>Strikes: {props.strike}</p>
            <p>Balls: {props.ball}</p>
        </div>
    )
}

export default Display;