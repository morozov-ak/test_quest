import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { ValidateComponent } from './components/ValidateComponent';
import { Some_component } from './components/Some_component';


function App() {
  const [trigger, setTrigger] = useState(0);
  return (
    <>
      <button onClick={() => { setTrigger((prev) => { return prev + 1 }) }}>Вызвать метод у дочерних компонентов</button>
    <ValidateComponent trigger={trigger}>
      
      <Some_component trigger={trigger}/>
      <Some_component trigger={trigger}>
        <ValidateComponent color="blue" trigger={trigger}>
          <h1>Развёрнутая дочка</h1>
        </ValidateComponent>
          <ValidateComponent color="blue" trigger={trigger}>
          <h1>Развёрнутая дочка2</h1>
          <ValidateComponent trigger={trigger} />
        </ValidateComponent>
      </Some_component>

    </ValidateComponent>
    </>
    
    
  )
}

export default App;
