import logo from './logo.svg';
import './Appa.css';
import NavBar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'

import React, {useState} from 'react'



// React Router

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom"

// Javascript jisne HTML ka mukut pehna hai - haha
// class is a reserved keyword, therfore we use className
// React has 2 types of components - 1. Class based components 2. Function based components
// We have to use "htmlFor = "" " for labels, in html we used "for"
// tabIndex - search using html and JSX

// Error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
// solution is wraping in <></>
// {name} -> resolves name// We can even import image or sound


// textUtil is passed from Navbar - this is Props
// We are passing SM in the {prop.title}

// NOTE: - Procs are never changed in the function

let name = "Sagar";



function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not

  const [tgText, setTgState] = useState('Enable Dark Mode')

  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },3000)
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      document.title = 'TextUtils (Dark Mode)'
      setMode('dark')
      setTgState('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled","success")
      // setInterval(()=>{
      // document.title = 'TextUtils'
      // },1000)
      // setInterval(()=>{
      // document.title = 'TextUtils (Dark Mode)'
      // },2000)
    }
    else{
      document.title = 'TextUtils (Light Mode)'
      setMode('light')
      setTgState('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
  }

  return (
  <>
  
  {/* <NavBar title="SM" aboutText="About Us"/>  */}
  {/* <NavBar title={47} aboutText="About Us"/>  */}
  {/* default props */}
  {/* <Router> */}
  <NavBar title ="SM" mode ={mode} toggleMode={toggleMode} tgText={tgText}/>
  <Alert alert={alert}/>
  
  {/* <Switch>
    <Route exact path = "/about">
      <About />
    </Route>
    <Route exact path = "/">
    </Route>
    </Switch>
  </Router> */}

  <TextForm heading = "Enter Text for Converting to Upper Case" mode={mode} showAlert={showAlert}/>

  {/* <About /> */}   
  </>
  );
}

export default App;
