import { useState } from "react";
import "./App.css";
import TextAnalyzer from "./Components/textAnalyzer";

function App() {
  const [text, setText] = useState('');

  return(
  <>
    <TextAnalyzer text={text} setText={setText} />
  </>);
}

export default App;

// Write React Code for Text Analyzer (character count, words count, special character occurrence)
