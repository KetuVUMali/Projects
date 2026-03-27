import React from 'react'
import { useState } from 'react';

const Event = () => {

    function onClikHandle(){
        alert("Button Clicked")
    }

    function onMouseOverHandle(){
        alert("Para Ke Upar Mouse Leke Aaye Ho");
    }

    function onInputHandle(e){
        console.log("Value Chamge Ho Gaya : ", e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();                 // Prevent the default form submission behavior             
        console.log("Form Submit Ho Gaya");
    }


    const [text, setText] = useState("Hover over me!");
  function handleMouseOver() {
    setText("You hovered over me! 🎉");
  }


  return (
        <div>
                <button onClick={() => alert("Button Clicked")}> Click Me </button> 
                <br /><br />
                <button onClick={ onClikHandle }> onClick </button>
                <br /><br />
                

                <from>
                <p> Check Console </p>
                    <input type="text" placeholder='Enter Your Name' onChange={onInputHandle} />
                </from>
                <br /><br />


                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Your Name' onChange={ onInputHandle } />
                    <button type='submit' > Submit </button>
                </form>
                <br /><br /><br />
               
               
                <h2 onMouseOver={handleMouseOver}>{text}</h2>
                <br /><br /><br />
                <p onMouseOver={onMouseOverHandle} style={ {color:"red", backgroundColor:"yellow"} }> Mouse Over ( I am Para )</p>
        </div>
  )
}

export default Event