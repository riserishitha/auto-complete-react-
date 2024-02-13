import { useState } from "react";
import data from "./resources/countryData.json";

function App() {
  const [state, setState] = useState([]);
  const changeonClick = (e) => {
    const Name = e.target.value.toLowerCase();
    const fileringData = data.filter(ele => ele.name.toLowerCase().includes(Name));
    setState(fileringData);
  }
  const keyHandlers = (e) => {
    if(e.key === "Escape"){
      console.log("Escape")
      setState([])
    }
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize:"3rem"}}>Search</h1>
      <input type="text" onChange={changeonClick} onKeyDown={keyHandlers}/>
      <button>Search</button>
      {state.map((ele, i) => (
        <div key={i}>{ele.name}</div>
      ))}
    </div>
  );
}

export default App;