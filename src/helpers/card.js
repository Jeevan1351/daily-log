import { useState } from "react"

function Card(props) {
    const [currVal, setCurrVal] = useState("")
    const [localAct, setLocalAct] = useState(props.value.activities)
    function handleSubmit(event)
    {
        if (currVal.trim() !== "")
        {
            console.log(currVal)
            props.onChange(currVal, props.value.date)
            setCurrVal("")
        }
    }

    function handleInput(event)
    {
        setCurrVal(event.target.value)
    }
    return (localAct)?<><div className='card' style={{color: `red`}}>
            <p id='title'>{props.value.day} {props.value.date}</p>
            <div id='activities'>
                <ul>
                    {localAct && localAct.map((act, index) => {
                        return <li key={index}><p>{act}</p></li>
                    })}
                </ul>
            </div>
            <div className="add">
                <input type='text' placeholder="Washed the cat" onChange={handleInput} value={currVal}></input>
                <button onClick={handleSubmit}>+</button>
            </div>  
        </div>
    </>:<></>
}

export default Card
