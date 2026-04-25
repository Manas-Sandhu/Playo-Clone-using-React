import { createRoot } from 'react-dom/client'
import Logincard from './components/Logincard'
import Signupcard from './components/Signupcard.jsx'
import { useState } from 'react'
import Dashboard  from './components/Dashboard.jsx'
import './index.css'

let App = ()=>{
  let clickHandler = ()=>{
    setToggerAuth(!toggleAuth)
  }
  const [toggleAuth,setToggerAuth] = useState(false)
  let auth1 = localStorage.getItem("auth") || false
  const [auth,setAuth] = useState(auth1)
  if(!auth){
    return(
      <>
      <div>{toggleAuth ? <Signupcard onClick ={clickHandler}/>:<Logincard onClick={clickHandler} setAuth={setAuth}/>}</div>
      </>
    )
  }else{
    return(
      <>
      <Dashboard></Dashboard>
      </>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
