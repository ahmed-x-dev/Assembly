
import { useState } from 'react'
import './App.css'
import Keyboard from './components/keyboard.jsx'
import Lang from './components/lang.jsx'
import Line from './components/line.jsx'
import languages from "./data/languages.js"
import key from "./data/keyboard.js"
import words from "./data/words.js"

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function buildLetters(word) {
  return [...word].map(char => ({ letter: char, guessed: false }))
}


function App() {


  const [word, setWord] = useState(getRandomWord)
  const [letters, setLetters] = useState(() => buildLetters(word))

  const [mistakes, setMistakes] = useState(0)

  const [lang, setLang] = useState(languages)


  const isWinner = letters.every(item => item.guessed)

  const [keys, setKeys] = useState(key)

  console.log(letters)

  const displayLanguages = lang.map((language) => (
    <Lang
      key={language.id}
      title={language.title}
      color={language.color}
      backgroundcolor={language.backgroundcolor}
      isDead={language.isDead}
    />
  ))

  const displayLetter = letters.map((item, index) => (
    <Line
      key={index}
      letter={item.letter}
      isGuessed={item.guessed}
      gameOver={mistakes === 9}
    />
  ))

  const displayKeyboard = keys.map((item, index) => (
    <Keyboard
      key={index}
      letter={item.key}
      status={item.status}
      disabled={isWinner || mistakes === 9}
      onClick={() => onWordClick(item.key)}
    />
  ))


  function onWordClick(clickedLetter) {

    const isCorrect = word.includes(clickedLetter)
    console.log(`Clicked letter: ${clickedLetter}, isCorrect: ${isCorrect}`)


    setKeys(prevKeys =>
      prevKeys.map(key =>
        key.key === clickedLetter
          ? {
              ...key,
              status: isCorrect ? "correct" : "wrong"
            }
          : key
      )
    )


    setLetters(prevLetters =>
      prevLetters.map(item =>
        item.letter === clickedLetter
          ? {
              ...item,
              guessed: true
            }
          : item
      )
    )


    if (!isCorrect) {
      setLang(prevLang =>
        prevLang.map(lang =>
          lang.id === mistakes
            ? {
                ...lang,
                isDead: true
              }
            : lang
        )
      )

      setMistakes(prev => prev + 1)
    }
  }



  function newGame() {
    const newWord = getRandomWord()
    setMistakes(0)
    setLang(languages)
    setWord(newWord)
    setLetters(buildLetters(newWord))
    setKeys(key)
  }


  return (
    <>
    <div className="header">
        <h1>Assembly:Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
    </div>

    {isWinner && (
      <div className="win">
    <p className="win-text">
      You Win!
      Well done!🎉
    </p>
    </div>
  )}

  {mistakes === 9 && (
    <div className="lose">
    <p className="lose-text">
      Game over
      You lose! Better start learning Assembly 😭
    </p>
    </div>
  )}

    <div className="lang">
        {displayLanguages}
    </div>

    <div className="word">
        {displayLetter}
    </div>

    <div className="keyboard">
        {displayKeyboard}
    </div>



  {(isWinner || mistakes === 9) && (
    
    <>
      <div className="new-game">
      <button className="new-game-button" onClick={newGame}>New Game</button>
      </div>
      {console.log("Game ended")}
    </>
  )}

    </>
  )
}

export default App
