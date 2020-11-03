import React, { useContext, useState } from "react"
import { GameContext } from "../components/context/GameContext"

export const Setup = () => {
  const { state, dispatch } = useContext(GameContext)
  const [name, setName] = useState("")
  const handleSubmitPlayer1 = () => {
    alert(`${name} submitted as player 1`)
    let player1 = state.player1
    player1.name = name
    dispatch({ type: "UPDATE_PLAYER1", payload: player1 })
  }
  return (
    <div>
      <h1>Player 1: Enter your name</h1>
      <form onSubmit={handleSubmitPlayer1}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="submit" value="Next" />
      </form>
    </div>
  )
}
