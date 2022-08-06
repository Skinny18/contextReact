//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
//import {CounterContext} from "../Context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
const Home = () => {

    //const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()

    const {color, dispatch} = useTitleColorContext()

    const setTitleColor = (color) =>{
      dispatch({type:color})
    }
  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <h2>Valor do contador: {counter}</h2>
        <ChangeCounter/>
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>

        </div>
    </div>

  )
}

export default Home