import React, {useState} from 'react';

function Room() {
    const state = useState(true);
    let isLit = state[0];
    let setLit = state[1];
    function updateLit() {
       setLit(!isLit);yyyyyy
    }
  return (
    <div>
      Jealous' room is {isLit ? 'lit' : 'dark'}.<br />
      <button onClick = {() => updateLit()}>Switch</button>
    </div>
  );
}

export default Room;
