import React, {useState} from "react"

export default function Counter(){

    const[value, setValue] = useState(0)

    function plus(){
        setValue(prevValue=> prevValue + 1)
    }

    function minus(){
        setValue(prevValue=> prevValue - 1)
    }

    function zero(){
        setValue(prevValue=> 0)
    }

    return(
        <div className="container">
            <h1 className="title">COUNTER APP</h1>
            <h1 className="display_value_area">{value}</h1>
            <div className="button_container">
                <button onClick={plus} className="btn">+</button>
                <button onClick={minus} className="btn">-</button>
                <button onClick={zero} className="btn">0</button>
            </div>
        </div>
    )
}
