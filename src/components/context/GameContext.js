import React, { createContext, useReducer, useEffect } from "react"
import PropTypes from "prop-types"

export const STATE_NAME = "GAME_STATE"

const initialState = {
  player1: { name: "", ships: [] },
  player2: { name: "", ships: [] },
  playerTurn: 1
}

const persistedState = JSON.parse(sessionStorage.getItem(STATE_NAME))

const finalInitialState = { ...initialState, ...persistedState }

const gameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLAYER1":
      return { ...state, player1: action.payload }
    case "UPDATE_PLAYER2":
      return { ...state, player2: action.payload }
    case "CHANGE_TURN":
      return { ...state, playerTurn: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const GameContext = createContext()

export const GameProvider = props => {
  const [state, dispatch] = useReducer(gameReducer, finalInitialState)

  useEffect(() => {
    sessionStorage.setItem(STATE_NAME, JSON.stringify(state))
  }, [state])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GameContext.Provider>
  )
}

GameProvider.propTypes = {
  children: PropTypes.element
}
