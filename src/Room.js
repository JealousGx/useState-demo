import React, {useState} from 'react';
import './Room.css';

function Room() {
    const state = useState(true);
    let isLit = state[0];
    let setLit = state[1];
    function updateLit() {
       setLit(!isLit);
    }
  return (
    <div className = {`room ${isLit ? "lit" : "dark"}`}>
      Jealous' room is {isLit ? 'lit' : 'dark'}.<br />
      <button onClick = {() => updateLit()}>Switch</button>
    </div>
  );
}

export default Room;
