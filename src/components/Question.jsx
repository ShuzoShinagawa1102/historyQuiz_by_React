import React from "react";

export const Question = (props) => {
    const { index, question } = props;
    return (
        <>
        <div className="question-area">
            <h2>問題{index}</h2>
            {/* 問題文のセッティング */}
            <p>{question}</p>
        </div>
        </>
    );
}