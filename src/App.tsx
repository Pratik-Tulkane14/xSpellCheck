import React, { useState } from 'react'
interface Dictionary{
  [key:string]:string
}
function App() {
  const customDictionary:Dictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const [inputText, setInputText] = useState<string>("");
  const [suggestedText, setSuggestedText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      
      return correctedWord || word;
    });
    
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };
  return (
    <div className='main'>
      <p>Spell Check and Auto-Correction</p>
      <textarea placeholder='Enter text...' value={inputText} onChange={handleInputChange}></textarea>
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  )
}

export default App
