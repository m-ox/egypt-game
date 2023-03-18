import React, { useState, useRef, useEffect } from 'react'
  
export const WordList = ({extraWords}) => {

  return (
    <div className="word-list">
      <p style={{ textDecoration: "underline" }}>Extra Words List</p>
      <ul>
        {extraWords.map((word, i) => {
          return (
          <ul key={i}>
            {word}
          </ul>
          )
        })}
      </ul>
    </div>
  )
}
  
export default WordList;