import React ,{ useState } from 'react';
import  './App.css'


function App()
{
  const [count,setCount]  = useState(0);
  
  return (
  <div>
  <h1>Value of count is {count}</h1>
  <button onClick={()=>setCount(count+1)}>Increase Counter</button>
  <button onClick={()=>setCount(count-1)}>Decrease Counter</button>
  <button onClick={()=>setCount(0)}>Reset Counter</button>
  </div>
  );
}

export default App;