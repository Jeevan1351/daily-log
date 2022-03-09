function Nav()
{
    const d = new Date()
    const days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednsday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
    const today = days[d.getDay()]
    return <><ul>
        <li><h1>Daily Log</h1></li>
        <li><h2>{d.getDate()} / {d.getMonth()+1} / {d.getFullYear()}</h2></li>
        <li><h2>{today}</h2></li>
        <li></li>
        </ul></>
}

export default Nav