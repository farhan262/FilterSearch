import { useState } from 'react';
import './App.css';
import MockData from"./MOCK_DATA (1).json"
function App() {
  const[searchitem,setSearchitem]= useState("")
  return (
    <div className="App">
      <input type="text" placeholder="Search..." 
      onChange={e=>{setSearchitem(e.target.value)}}/>
      {MockData.filter((val)=>{
        if(searchitem ===" "){
          return val
        }else if(val.first_name.toLowerCase().includes(searchitem.toLowerCase())){
          return val
        }
      }
      ).map((val,key)=>{
        return <div className='user' key={key}> 
          <p>{val.first_name}  {val.last_name}</p>
        
          </div>
      }
      )}
    </div>
  );
}

export default App;
