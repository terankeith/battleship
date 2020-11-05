import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "../components/context/GameContext"
import { makeShips } from "../utils/shipHelper"

export const Setup = ({ history }) => {
  const { state, dispatch } = useContext(GameContext)
  const [name, setName] = useState("")
  const [player, setPlayer] = useState()

  useEffect(() => {
    if (state.player1.name === "") {
      setPlayer(1)
    } else if (state.player2.name === "") {
      setPlayer(2)
    } else {
      history.push("/shipselect")
    }
  }, [state.player1.name, state.player2.name, history])

  const handleSubmit = () => {
    let player1 = state.player1
    let player2 = state.player2

    if (state.playerTurn === 1) {
      player1.name = name
      player1.ships = makeShips()
      dispatch({ type: "UPDATE_PLAYER1", payload: player1 })
      dispatch({ type: "CHANGE_TURN", payload: 2 })
    } else if (state.playerTurn === 2) {
      player2.name = name
      player2.ships = makeShips()
      dispatch({ type: "UPDATE_PLAYER2", payload: player2 })
      dispatch({ type: "CHANGE_TURN", payload: 1 })
    }
  }
  return (
    <div>
      <h1>
        {player === 1 ? "Player 1: " : "Player 2: "}
        Enter your name
      </h1>
      <form onSubmit={handleSubmit}>
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
