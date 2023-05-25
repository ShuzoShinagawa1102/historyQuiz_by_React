import React, { useState } from "react";
import "./style.css"

export const App = () => {
  // 配列群
  const questions = [
    "日本の歴史において、戦国時代に活躍した武将で、天下布武を掲げたのは誰でしょう？",
    "16世紀にキリスト教の布教を行い、日本で最初のキリスト教国王と称されたのは誰でしょう？",
    "幕末期の日本の政治家で、五箇条の御誓文を提唱し、明治維新の基盤を築いたのは誰でしょう？",
    "江戸時代中期に活躍し、草木染めの技術を確立した染物職人は誰でしょう？",
    "幕末の志士で、薩摩藩出身の政治家である彼は、大政奉還を実現し、日本の近代化に尽力しました。名前は？",
    "江戸時代の儒学者で、国学を大成し、『古事記伝』を編纂したのは誰でしょう？",
    "16世紀に活躍し、現在の東京を開拓した武将は誰でしょう？",
    "幕末の志士で、長州藩出身の彼は、王政復古を成し遂げ、明治天皇の即位を支えました。名前は？",
    "室町時代に活躍し、茶の湯を大成した茶人は誰でしょう？",
    "戦国時代の武将で、関ヶ原の戦いで東軍の総大将として西軍を破ったのは誰でしょう？"
  ];

  const answers = [
    "豊臣秀吉",
    "大友宗麟",
    "伊藤博文",
    "菱屋翁兵衛",
    "西郷隆盛",
    "本居宣長",
    "小田原北条氏",
    "坂本龍馬",
    "千利休",
    "徳川家康"
  ];

  // useState群
  const [question, setQuestion] = useState(questions[0]);
  const [inpuText, setInputText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [score, setScores] = useState(0);
  const [index, setIndex] = useState(1);
  const [judgeFlag, setJudgeFlag] = useState("");

  // 関数群
  const onChangeInputText = (event) => setInputText(event.target.value);

  const onClickSubmit = () => { 
    if(inpuText === "") return;
    const yourAnswerText = inpuText; 
    setInputText("");
    // 正誤判定処理
    if(yourAnswerText === answers[index-1]) {
      const newCorrectAnswers = [...correctAnswers,yourAnswerText];
      setCorrectAnswers(newCorrectAnswers);
      const newScore = score + 1;
      setScores(newScore);
      setJudgeFlag("正解！")
    } else {
      const newIncorrectAnswers = [...incorrectAnswers,yourAnswerText];
      setIncorrectAnswers(newIncorrectAnswers);
      setJudgeFlag("不正解！");
    }

    // questionを更新
    const newIndex = index + 1;
    setIndex(newIndex);
    const nextQuestion = questions[index];
    setQuestion(nextQuestion);
  }

  return(
    <>
    {/* タイトル */}
    <div className="title-area">
      <h1>歴史人物クイズ</h1>
    </div>

    {/* 出題エリア */}
    <div className="question-area">
      <h2>問題{index}</h2>
      {/* 問題文のセッティング */}
      <p>{question}</p>
    </div>

    {/* 入力エリア */}
    <div className="input-area">
      <input 
        placeholder="歴史人物を入力" 
        onChange={onChangeInputText}
        value={inpuText}
      />
      <button onClick={onClickSubmit}>回答</button>
    </div>

    {/* 正誤判定表示エリア */}
    <div className="judge-area">
      <h2>正誤判定</h2>
      <p>{judgeFlag}</p>
    </div>

    {/* 正解済みエリア */}
    <div className="correct-area">
      <h2>正解群</h2>
      <ul className="correct-list">
        {correctAnswers.map((answer) => {
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
    
    {/* 不正解エリア */}
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

    {/* スコア */}
    <div className="score-area">
      <h2>スコア</h2>
      <p>あなたのスコアは、</p>
      <p>{score}</p>
    </div>
    </>
  );
}