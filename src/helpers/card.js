import { useState } from "react"

function Card(props) {
    const [currVal, setCurrVal] = useState("")
    const [localAct, setLocalAct] = useState(props.value.activities)
    function handleSubmit(trig)
    {
        if (currVal.trim() !== "")
        {
            var temp = props.value
            temp.activities = localAct
            temp.activities.push(currVal)
            setLocalAct(temp.activities)
            props.onChange(temp, props.value.date)
            setCurrVal("")
        }
        if (trig)
        {
            var temp = props.value
            temp.activities = localAct
            props.onChange(temp, temp.date)
            setLocalAct(localAct)   
        }
    }

    function handleInput(event)
    {
        setCurrVal(event.target.value)
    }
    function handleDelete(index)
    {
        var temp = localAct
        var c = temp.splice(index, 1)
        console.log('sliced', c, temp)
        setLocalAct(temp)
        handleSubmit(true)
    }
    return (localAct)?<><div className='card' style={{color: `red`}}>
            <p id='title'>{props.value.day} {props.value.date}</p>
            <div id='activities'>
                <ul>
                    {localAct.map((act, index) =>{
                        return <li key={index}><p>{act}</p><button onClick={(index)=> handleDelete(index)}>X</button></li>
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
