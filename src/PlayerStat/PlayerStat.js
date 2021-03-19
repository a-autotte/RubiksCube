import React from 'react'
import './PlayerStat.css';

function PlayerStat({image, gamePlayer, win, rank, rubikRecord}) {
    return (
        <div className="playerStat">
            <div className="playerStat__image">
                <img src={image} alt=""/>
            </div>

            <div className="playerStat__label">
                <p> PlayerName : {gamePlayer} </p>
            </div>
            <div className="playerStat__label">
                <p> Number of win : {win} </p>
            </div>
            <div className="playerStat__label">
                <p> Rank : {rank} </p>
            </div>
            <div className="playerStat__label">
                <p> Best time ever : {rubikRecord} </p>
            </div>
        </div>
    )
}

export default PlayerStat;
