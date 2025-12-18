import React, {useState} from "react";

function TextAnalyzer({ text, setText }) {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [specialCount, setSpecialCount] = useState(0);

  function forCharCount(char) {
    const count = char.length;
    return count;
  }
function forWordCount(text) {
  if (text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}

  function forSpecialCount(special) {
    const matches = special.match(/[^a-zA-Z0-9 ]/g);
    return matches ? matches.length : 0;
  }

  function handleInput(x) {
    let data = x.target.value;
    setText(data);
    setCharCount(forCharCount(data));
    setWordCount(forWordCount(data));
    setSpecialCount(forSpecialCount(data));
  }

  return (
    <div>
      <h2>Enter Text: </h2>
      <textarea
        type="text"
        value={text}
        onChange={(e) => handleInput(e)}
        placeholder="Enter text"
      />
      <p>Characters: {charCount}</p>
      <p>Words: {wordCount}</p>
      <p>Special Characters: {specialCount}</p>
    </div>
  );
}

export default TextAnalyzer;
