import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { GameProvider } from "./components/context/GameContext"
import { Start, Setup, ShipSelect } from "./views"

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/setup" component={Setup} />
            <Route exact path="/shipselect" component={ShipSelect} />
          </Switch>
        </div>
      </BrowserRouter>
    </GameProvider>
  )
}

export default App
