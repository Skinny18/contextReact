//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
//import {CounterContext} from "../Context/CounterContext"

const About = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  return (
    <div>About
              <h2>Valor do contador: {counter}</h2>
    <ChangeCounter/>
    </div>
  )
}

export default About