function Card(value) {
    console.log(value)
    return (value)?<><div className='card' style={{color: `red`}}>
            <p id='title'>{value.value.day} {value.value.date}</p>
            <div id='activities'>
                <ul>
                    {value.value.activities && value.value.activities.map((act, index) => {
                        return <li key={index}><p>{act}</p></li>
                    })}
                </ul>
            </div>
            <div className="add">
                <input type='text' placeholder="Washed the cat"></input>
                <button>+</button>
            </div>  
        </div>
    </>:<></>
}

export default Card
