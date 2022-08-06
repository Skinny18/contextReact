import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

export const useCounterContext = () => {

    const context = useContext(CounterContext)

    if(!context){
        console.log("Contexto nao encontrado")
    }

    return context;
}
