import React from "react";

export const Correct = (props) => {
    const { correctAnswers } = props;
    return (
        <>
        <div className="correct-area">
            <h2>正解群</h2>
            <ul className="correct-list">
                {correctAnswers.map((answer) => {
                    return (
                    <>
                        <div key={answer} className="list-row">
                        <   li>{answer}</li>
                        </div>
                    </>
                    );
                })}
            </ul>
        </div>
        </>
    );
}