function Card(value) {
    
    return (value)?<><div className='card' style={{color: `red`}}>
            <p>{value.value.day} {value.value.date}</p>
            <ul>
                {value.value.activities && value.value.activities.map((act, index) => {
                    return <li key={index}><p>{act}</p></li>
                })}
            </ul>
        </div>
    </>:<></>
}

export default Card
