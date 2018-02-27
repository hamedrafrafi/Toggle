import React from "react"
import { render } from "react-dom"
import Blink from "./Blink"

const App = () => (
  <div>
    <Blink />
  </div>
)

render(<App />, document.getElementById("root"))
