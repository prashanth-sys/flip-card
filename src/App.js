import {Switch, Route} from 'react-router-dom'

import Home from './componets/Home'
import MemoryMatrix from './componets/MemoryMatrix'
import MatrixHomePage from './componets/MatrixHomePage'
import FlipHomePage from './componets/FlipHomePage'
import FlipCard from './componets/FlipCardGame'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory-matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/card-flip-memory-game" component={FlipHomePage} />
    <Route exact path="/flip/card" component={FlipCard} />
  </Switch>
)

export default App
