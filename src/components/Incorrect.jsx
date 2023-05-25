import React from "react";

export const Incorrect = (props) => {
    const { incorrectAnswers } = props;
    return (
        <>
        <div className="incorrect-area">
            <h2>不正解群</h2>
            <ul className="correct-list">
            {incorrectAnswers.map((answer) => {
                return (
                <>
                    <div key={answer} className="list-row">
                        <li>{answer}</li>
                    </div>
                </>
                );
            })}

            </ul>
        </div>
        </>
    );
}