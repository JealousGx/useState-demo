import React, {useState} from 'react';
import './Room.css';

function Room() {
    const state = useState(true);
    let [temp, increaseTemp] = useState(22);

    let isLit = state[0];
    let setLit = state[1];
    function updateLit() {
       setLit(!isLit);
    }
  return (
    <div className = {`room ${isLit ? "lit" : "dark"}`}>
      Jealous' room is {isLit ? 'lit' : 'dark'}.<br />
      <button onClick = {() => updateLit()}>Switch</button><br/>
      <button onClick = {() => setLit(isLit = true)}>Turn on</button>
      <button onClick = {() => setLit(isLit = false)}>Turn off</button><br/><br/><br/>
      Current temperature: {temp}.<br/>
      <button onClick = {() => increaseTemp(++temp)}>Increase temperature</button><br/>
      <button onClick = {() => increaseTemp(--temp)}>Decrease temperature</button>
    </div>
  );
}

export default Room;
