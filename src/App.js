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
  useEffect(  async()=> {
    const realm_app_id = 'daily-log-yovdr'
    const profile = new Realm.App({id: realm_app_id})
    const credentials = Realm.Credentials.anonymous();
    try{
      const user = await profile.logIn(credentials);
      const v = await user.functions.getAllDays();
      setValue(v)
    }
    catch(error)
    {
      console.log(error)
    }
  }, [])
  return (
    <div className="App">
      <div id='top'>
        <Nav />
      </div>
      <div id='support'></div>
      <div className='content'>
        {value && value.map((val) => {
          return <Card value={val} key={val._id}/>
        })}
      </div>
    </div>
  );
}

export default App;
