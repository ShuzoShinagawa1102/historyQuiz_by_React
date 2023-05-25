import React from "react";

export const Input = (props) => {
    const { onChange, inpuText, onClick } = props;
    return (
        <>
        <div className="input-area">
            <input 
            placeholder="歴史人物を入力" 
            onChange={onChange}
            value={inpuText}
            />
            <button onClick={onClick}>回答</button>
        </div>
        </>
    );
}