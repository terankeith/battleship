import React from "react"
import Button from "react-bootstrap/Button"

export const Start = ({ history }) => {
  return (
    <div>
      <h1>React Battleship!</h1>
      <Button
        onClick={() => {
          history.push("/setup")
        }}
      >
        Start
      </Button>
    </div>
  )
}
