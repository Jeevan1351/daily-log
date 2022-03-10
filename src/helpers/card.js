import { useState } from "react"

function Card(props) {
    console.log(props.value)
    const [currVal, setCurrVal] = useState("")
    const [localAct, setLocalAct] = useState(props.value.activities)
    function handleSubmit()
    {
        if (currVal.trim() !== "")
        {
            console.log(currVal)
            var temp = props.value
            temp.activities = localAct
            temp.activities.push(currVal)
            setLocalAct(temp.activities)
            console.log('local acts are', localAct)
            props.onChange(temp, props.value.date)
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
