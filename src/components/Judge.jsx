import React from "react";

export const Judge = (props) => {
    const { judgeFlag } = props;
    return (
        <>
        <div className="judge-area">
            <h2>正誤判定</h2>
            <p>{judgeFlag}</p>
        </div>
        </>
    );
}