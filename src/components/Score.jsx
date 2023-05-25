import React from "react";

export const Score = (props) => {
    const { score } = props;
    return (
        <>
        <div className="score-area">
            <h2>スコア</h2>
            <p>あなたのスコアは、</p>
            <p>{score}</p>
        </div>
        </>
    );
}