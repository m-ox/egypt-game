import React, { useState } from 'react'
import noun from './lib/noun'
import adjective from './lib/adjective'
import random from 'random'
import { Timer } from './components/timer'
import { WordList } from './components/wordlist'

import banner from './images/banner.png'

import './styles/main.scss'

// import scss

function App() {
  const [nounWord, setNoun] = useState('something')
  const [adjectiveWord, setAdjective] = useState('randomly')
  const [extraNouns, setExtraNouns] = useState([])
  const [extraAdjectives, setExtraAdjectives] = useState([])

  const [safe, setSafe] = useState(true)
  const [show, setShow] = useState(false)
  const [adjValue, setAdjValue] = useState('')
  const [nounValue, setNounValue] = useState('')

  function randomSel (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  function finalSelection (adj, nn) {
    const nouns = noun(safe).concat(...extraNouns)
    const adjectives = adjective().concat(...extraAdjectives)
    console.log('nouns:', nouns)

    setNoun(nouns[random.int(0,nouns.length -1)])
    setAdjective(adjectives[random.int(0, adjectives.length -1)])
  } 

  function handleKeyDown(e, wordType) {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      if (wordType === 'noun') {
        const newArr = extraNouns.concat([e.target.value])
        setExtraNouns(newArr)
        setNounValue('')
      } else if (wordType === 'adj') {
        const newArr = extraAdjectives.concat([e.target.value])
        setExtraAdjectives(newArr)
        setAdjValue('')
      } else {
        console.error('Something went wrong...')
        setNounValue('')
        setAdjValue('')
      }
    }
  }

  return (
    <div className="App">
      <div className="banner">
        <img src={banner} />
        v2.0.4
      </div>

      <div className="button-container">
        <button onClick={() => (finalSelection(noun, adjective))}>
          Click me for a topic!
        </button>
        <button
          onClick={() => safe ? setSafe(!safe) : setSafe(!safe)}
          style={{ fontWeight: '900', color: safe ? 'green' : 'red' }}
        >
          Safety {safe ? 'ON' : 'OFF'}
        </button>

        <input
          type="text"
          className="component"
          value={adjValue}
          placeholder="Enter new descriptor here..."
          onChange={e => {
            setAdjValue(e.target.value)
          }}
          onKeyDown={(e => handleKeyDown(e, 'adj'))}
          onKeyUp={(e) => handleKeyDown(e, 'adj')}
        />
        <input
          type="text"
          className="component"
          value={nounValue}
          placeholder="Enter new subject here..."
          onChange={e => {
            setNounValue(e.target.value)
          }}
          onKeyDown={(e => handleKeyDown(e, 'noun'))}
          onKeyUp={(e) => handleKeyDown(e, 'noun')}
        />
      </div>
      

      <div className="topic-result">
        <p>
          {adjectiveWord} {nounWord}
        </p>
      </div>

      <div className="time-n-word-list">
        <Timer />
        <WordList
          extraWords={extraNouns.concat(...extraAdjectives)}
        />
      </div>

      <button onClick={() => show ? setShow(false) : setShow(true)}>
        What is <strong>Gay Egypt</strong> and what are the rules?
      </button>

      {show ?
        <div className="hidey">

        <p>Basic Rules:</p>

        <ul>
          <li>
          <strong>Gay Egypt</strong> is an adult competitive drawing game. It got its name from the very first example topic drawn in the game, ever.
          </li>
          <li>
            Determine who draws first. Once a round is completed, proceed to take turns drawing in a circle.
          </li>
          <li>
            When the round starts, the artist randomly generates a topic. Only the artist can see what the topic is. You can use any medium. Pen and paper, Tilt brush, fingerpainting, drawing tablet. Whatever. 
          </li>
          <li>The artist gets <strong>2</strong> minutes to draw their topic. Depending how you want to play, you can choose to let people guess as you draw, or give the guessers 30 seconds to guess at the 5 minute end and reveal.</li>
          <li>
            Artists are allotted <strong>2</strong> unrelated written words to their topic in their illustration.
          </li>
          <li>
            Guessers are to say precisely the topic's two words to win the round.
          </li>
          <li>
            The artist can only confirm with a nod the noun, but not the descriptive word.
          </li>
          <li>
            Once the time is up and if someone has guessed correctly, the winner gets one point.
          </li>
          <li>
            As a penalty for no one being able to guess their drawing, the artist will have to do one more round. If they fail to have a winner for that round, they will lose one point. Yes, even into the negatives.
          </li>
          <li>
            Game ends once a player receives 5 points.
          </li>
        </ul>

        </div> : null}

    <p>Game and site created by Maud</p>

    </div>
  )
}

export default App


{/* <div className="hidey">

<p>Basic Rules:</p>

<ul>
  <li>
  is an adult competitive drawing game. It got its name from the very first example topic drawn in the game, ever.
  </li>
  <li>
    When the round starts, the artist randomly generates a topic. Only the artist can see what the topic is. You can use any medium. Pen and paper, VR Tilt brush, fingerpainting, drawing tablet. Whatever. 
  </li>
  <li>The artist gets 5 minutes to draw their topic. Depending how you want to play, you can choose to let people guess as you draw, or give the guessers 30 seconds to guess at the 5 minute end and reveal.</li>
  <li>
    Artists are allotted 2 unrelated words to their topic in their illustration.
  </li>
  <li>
    Guessers are to say precisely the topic's two words to win the round.
  </li>
  <li>
    The rtist can only conirm with a nod the noun, but no the adjective.
  </li>
  <li>
    Once the time is up and if someone has guessed correctly, the winner gets one point.
  </li>
  <li>
    As a penalty for no one being able to guess their drawing, the artist will have to do one more round. If they fail to have a winner for that round, they will lose one point. Yes, even into the negatives.
  </li>
  <li>
    Game ends once a player receives 3 points.
  </li>
</ul>

</div> */}