import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className='Score'>
                <p>Scores: {props.hits}</p>
            </div>
            <div className="strikes">
                <p>Strikes: {props.strikes}</p>
                <p>Balls: {props.balls}</p>
            </div>
        </div>
    )
}

export default Display;