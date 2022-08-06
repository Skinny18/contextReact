//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
//import {CounterContext} from "../Context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  return (
    <div>Contact
              <h2>Valor do contador: {counter}</h2>
      <ChangeCounter/>
    </div>
    
  )
}

export default Contact