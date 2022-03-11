import Nav from './helpers/navbar'
import Card from './helpers/card'
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import * as Realm from 'realm-web';
// var pub = 'udjacvnr'
// var pri = '15182676-8b50-4e0b-b513-21ffcef7ef13'
// var appId = 'daily-log-yovdr'

function App() {
  
  const [value, setValue] = useState()
  const [today, setToday] = useState()
  const realm_app_id = 'daily-log-yovdr'
  const profile = new Realm.App({id: realm_app_id})
  const credentials = Realm.Credentials.anonymous();
  var d = new Date()
  const days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednsday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
  const day = days[d.getDay()]
  useEffect(()=> {
    async function fetchData(){

      try{
        const user = await profile.logIn(credentials);
        var v = await user.functions.getAllDays();
        v = v.sort((a,b) => {
          const alst = a.date.split("/")
          const blst = b.date.split('/')
          if(parseInt(alst[2]) < parseInt(blst[2]))
          {
            return parseInt(alst[2]) - parseInt(blst[2])
          }
          else if (parseInt(alst[2]) > parseInt(blst[2]))
          {
            return parseInt(alst[2]) - parseInt(blst[2])
          }
          else
          {
            if(parseInt(alst[1]) < parseInt(blst[1]))
            {
              return parseInt(alst[1]) - parseInt(blst[1])
            }
            else if (parseInt(alst[1]) > parseInt(blst[1]))
            {
              return parseInt(alst[1]) - parseInt(blst[1])
            }
            else
            {
              if(parseInt(alst[0]) < parseInt(blst[0]))
              {
                return parseInt(alst[0]) - parseInt(blst[0])
              }
              else if (parseInt(alst[0]) > parseInt(blst[0]))
              {
                return parseInt(alst[0]) - parseInt(blst[0])
              }
              else
              {
                return 0;
              }
            }
          }
        })
        setValue(v.reverse())
        setToday(v.filter((tday) => tday.date === `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`))
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  async function handleChange(newVals, date)
  {
    try {
      const user = await profile.logIn(credentials);
      await user.functions.updateActivities(newVals)
      var t = value
      var c = t.find(a => a.date === date)
      var ind = t.indexOf(c)
      t[ind] = newVals
      setValue(t)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div id='top'>
        <Nav props={d}/>
      </div>
      <div id='support'></div>
      <div className='content'>
        {(today === [] || today === undefined || today[0] === undefined)?<><Card value={{"day": day, "date": `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`, 'activities': ["Shaka Laka"]}} onChange={handleChange}/></>:<Card value={today[0]} key='121212' onChange={handleChange} bomb={{today}}/>
}
        {value && value.map((val) => {
          if (val.date !== `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}` )
          return <Card value={val} key={val._id} onChange={handleChange}/>
        })}
      </div>
    </div>
  );
}

export default App;
