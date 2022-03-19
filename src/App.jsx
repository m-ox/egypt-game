import { useState } from 'react'
// import the arrays
// import scss

function App() {
  //const [count, setCount] = useState(0)

  //write function to randomize from array

  return (
    <div className="App">
      <div class="banner">
        <img src=''> //banner</img>
        v1.0.0
      </div>

      <div class="topic-selection">
        div class="button-container">
        <button>Click me for a topic!</button>
      </div>

      <div class="topic-result">
        <p>
          {adjective}
          [noun]
        </p>
      </div>

    <div class="da-rules">
      <button>
        <button>What is <strong>Gay Egypt</strong> and what are the rules?</button>
      </button>
      
      <h4>Gay Egypt</h4>
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

    </div>

    <p>Game created by Maud, Cloudy, and Adam</p>
    
    </div>
  )
}

export default App
