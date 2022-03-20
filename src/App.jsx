import { useState } from 'react'

import { nouns } from './lib/noun'
import { adjectives } from './lib/adjective'
import { Timer } from './components/timer'

import banner from './images/banner.png'

import './styles/main.scss'

// import scss

function App() {
  const [noun, setNoun] = useState('something')
  const [adjective, setAdjective] = useState('randomly')
  const [show, setShow] = useState(false)

  function randomSel (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  function finalSelection (adj, nn) {
    setNoun(randomSel(nouns))
    setAdjective(randomSel(adjectives))
  } 

  //console.log(randomSel(adjectives), randomSel(nouns))

  return (
    <div className="App">
      <div className="banner">
        <img src={banner} />
        v1.0.0
      </div>

      <div className="button-container">
      <button onClick={() => (finalSelection(nouns, adjectives))}>
        Click me for a topic!</button>
      </div>

      <div className="topic-result">
        <p>
          {adjective} {noun}
        </p>
      </div>

      {/* <Timer /> */}

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
            When the round starts, the artist randomly generates a topic. Only the artist can see what the topic is. You can use any medium. Pen and paper, Tilt brush, fingerpainting, drawing tablet. Whatever. 
          </li>
          <li>The artist gets <strong>5</strong> minutes to draw their topic. Depending how you want to play, you can choose to let people guess as you draw, or give the guessers 30 seconds to guess at the 5 minute end and reveal.</li>
          <li>
            Artists are allotted <strong>2</strong> unrelated written words to their topic in their illustration.
          </li>
          <li>
            Guessers are to say precisely the topic's two words to win the round.
          </li>
          <li>
            The artist can only confirm with a nod the noun, but not the adjective.
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

    <p>Game created by Maud, Cloudy, and Adam</p>

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