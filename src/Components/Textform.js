import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked - "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };

  const handlelowClick = () => {
    // console.log("Uppercase was clicked - "+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };

  const handleCopy=()=>{
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard","success");
  } 
  
  const handleClear = ()=>{
    let newText=""
    setText(newText);
    props.showAlert("Text is cleared","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces is removed","success");
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  // text="new text"; //Wrong way to change the  state
  // setText("new text");//correct way ton change the state
  return (
    <>
      <div className="container"style={{colr:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading} </h1>

        <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}
          id="mybox"
          name="mybox"
          rows="8"
        ></textarea>
        </div>
      

      
        <button
          className="btn btn-primary my-5"
          id="uppercase"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
      

    
        <button
          className="btn btn-primary mx-5 "
          id="lowercase"
          onClick={handlelowClick}
        >
          Convert To LowerCase
        </button>

        <button
          className="btn btn-primary "
          id="cleartext"
          onClick={handleClear}
        >
          Clear text
        </button> 

        <button
          className="btn btn-primary mx-5"
          id="copytext"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          className="btn btn-primary"
          id="Removeextraspaces"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>  

      </div>

    <div className="container"style={{color:props.mode==="dark"?"white":"black"}}>
      <div className="container">
        <h2> Your text summary</h2>
        <p>
          {text.split(" ").length} words,{text.length} charachter{" "}
        </p>
      </div>

      <div className="container">
        <h2>Time taken to read this text</h2>
        <p> {0.008*text.split(" ").length} minutes take to Read this text. </p>
      </div>


      <div className="container">
      <h2> Preview</h2>
      {text.length>0?text:"Enter something in the textbox to preview it here"}
      </div>
    </div>

    </>
  );
}
