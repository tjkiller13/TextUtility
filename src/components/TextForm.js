import React, {useState} from 'react'


export default function TextForm(props) {

    const[text, setText] = useState('');
    // setText is going to be the update function - set text to 'Enter text here'
    // console.log(useState('Enter text here2'));
    // returns an arrray

    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change state

    const handleUpClick = ()=>{
        console.log("Button was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converting Text to Upper Case","success")
    };
    const handleLowClick = ()=>{
        console.log("lower case all"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converting Text to Lower Case","success")
    };

    const clear = ()=>{
        console.log("upper case all"+text)
        let newText = "";
        setText(newText);
        props.showAlert("Texbox has been cleared","warning")
    };

    const handleOnChange = (e)=>{
        console.log("On change")
        setText(e.target.value)
    };

    const copyText = () =>{        
        console.log("I am a copy")
        var text = document.getElementById("myBox")
        // navigator.clipboard.writeText({text}) cannot do like this
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied successfully","success")
        

    }

    const handleRedundancy = () =>{
        let set1 = new Set(text.split(" "));          
        let newText = Array.from(set1).join(" ");
        setText(newText);
    }

    const handleExtraSpaces = () =>{
        let arr = text.split(/[ ]+/); // using regex to split
        setText(arr.join(" "))
    }

    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }

    return (
        <>
        <div style = {{ color: props.mode==='light'?'black':'white'}} className="container my-2">
        <h1 >{props.heading}</h1>
        <form className="row g-3">
            <div className="mb-3">
            <textarea className="form-control" style = {{ backgroundColor: props.mode==='light'?'black':'white', color: props.mode==='light'?'white':'black'}} id="myBox" rows="8" value={text}  onChange={handleOnChange}></textarea>
            </div>
        </form>
        <div className="row">
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={handleUpClick}>Convert to Upper Case</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={handleLowClick}>Convert to Lower Case</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={clear}>Clear</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={handleRedundancy}>Remove Redundant Words</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={handleExtraSpaces}>Remove White Space</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`}onClick={capitalFirstLetter}>Capitalize</button>
            </div>
            <div className="col-sm-12 my-2">
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={copyText}>Copy Text</button>
            </div>
        </div>            
        </div>
        <div style = {{ color: props.mode==='light'?'black':'white'}} className="container">
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.split(" ").length:0} words, {text.length} characters</p>
            <p>{text.length>0?0.008 * text.split(" ").length:0} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing to preview"}</p>
        </div>
        </>
    )
}

// every component has a state
// if textbox is blank, that is a state, if we have written something in the textbox, it is again another state

// import {useState}