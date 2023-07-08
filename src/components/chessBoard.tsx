import React from "react";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;

            if (number % 2 === 0) {
                board.push(
                    <div className="col bg-black"></div>
                );
            } else {
                board.push(
                    <div className="col bg-white "></div>
                );
            }
        }
    }

    return (
        <div>
            <PlayerNameAndTimeLeft />
            <div className="col bg-black h-3/4 grid grid-row-4 grid-cols-8">{board}</div>
            <PlayerNameAndTimeLeft />
        </div>
    )
}

const PlayerNameAndTimeLeft = () => {
    return (
    <div className="h-14 grid grid-cols-2 content-center text-center">
        <div>Player Name</div>
        <div>Time</div>
    </div>
    )
}