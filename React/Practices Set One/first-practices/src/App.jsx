import './App.css'
import Counter from './components/Counter'
import  UserCard01  from './components/UserCard01'
import CardData from './components/CardData'
import { useState } from 'react'
import GetFun from './components/GetFun'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Login from './components/Login'
import LogOut from './components/LogOut'
import LoginControl from './components/LoginControl'
import Event from './components/Event'

function App() {

              // 04 Parent to child pass function
                  // const [count, setCount] = useState(0)    // useState is a Hook that lets you add React state to function components. 04 Parent to child pass function
                  // function handleClick() { setCount(count + 1); } // 04 Parent to child pass function}

              // 05 Cart1 & Cart2
                  // const [ name , setName ] = useState(" ");

  

  return (
    <div>
          <h4>Hii, I am App.jsx From Component</h4>
          <h5>Let's Start</h5>

                      {/*01 <UserCard01 /> */}

                      {/*02 <Counter /> */}

                      {/* 03 <CardData>   
                            <h1>CardData</h1>
                            <p> I am Children </p>
                            <mark> I am Done </mark>
                      </CardData> */}
                      {/* <CardData children="Good Morning..!">  </CardData> */}
                      {/* <CardData children="Hii.. Jaimin Kumar"> Hii...I am Ketan </CardData> */}

                      {/* 04 <GetFun incrementCount={handleClick} text="Click Mi"> <p>{count}</p> </GetFun> */}
                        {/* Parent Send Function To Child Button Perform Operation.  incrementCount is var & text is button name */}

                      {/* 05
                        <Card1 name={name} setName={setName} />
                            <p>I Am Parent To Update State(Logic) & Share : <mark>{name}</mark></p>
                            < br />
                        <Card2 name={name} setName={setName} /> 
                      */}

                      {/* 06 Check DownSide */}

                      {/* 07 <LoginControl /> */}

                      {/* 08 < Event /> */}

                      {/* 09 <A />     useContext*/}



    </div>
  )




  //06 Login & Logout  ( Comment All Other return() If you want to check this code)
  // 06 Login & Logout
    const [ isLoggedIn , setIsLoggedIn ] = useState(false)
      // i. If-Else Condition.
          //   if(isLoggedIn){                     // Change true & false Userlogin Check
          //     return( <LogOut />)
          //   }
          //   else{
          //     return( <Login />)
          //   }

      // ii. Ternary Operator.
          // return( 
          //        <div> { isLoggedIn ? <LogOut /> : <Login /> } </div> 
          //       )  

      // iii. Logical Opc / Short-Circuit Evaluation.
          // return(                   // change true & false Userlogin Check
          //   <div> 
          //       <div>{ isLoggedIn && <LogOut /> } </div>    
          //       <div>{ !isLoggedIn && <Login /> } </div>
          //   </div>
          // )

        // iv. Early Return
            // if(!isLoggedIn){
            //   return(
            //     <div>
            //           <LogOut />
            //     </div>
            //   )
            // }         
          



}

export default App
