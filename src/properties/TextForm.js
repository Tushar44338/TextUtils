import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const upbtnclick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text converted into uppercase!","success");
  }
  const lobtnclick = () => {
    console.log("button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted into lowercase!","success");
  }
  const clearbtnclick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  
  return (
    <>
    <div  className='container my-4'>
        <div className="mb-3" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.title} </h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#415a77':'white' , color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick = {upbtnclick}>To UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick = {lobtnclick}>To LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick = {clearbtnclick}>Clear</button>
    </div>
    <div className='container my-3' style={{color : props.mode === 'dark'?'white':'black'}}> 
      <h2>summary of your text</h2>
      <p>
          <b>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}</b> words and 
          <b> {text.length}</b> characters
        </p>
      <h3>preview</h3>
      <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
