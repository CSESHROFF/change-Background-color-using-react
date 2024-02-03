import React, {useState} from 'react';



const App = ()=>{
  const purple = "#8e44ad";

  const [bg, setbg] = useState(purple);
  const [name, setName] = useState('Click me!')

  const bgChange = ()=>{
    let newBg = '#34495e';
    setbg(newBg);
    
    setName("Oho !!")
  };

  const real = ()=>{
    setbg('yellow');

    setName('yee!!');
  }

  return(
    <>
      <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={real} onMouseEnter={bgChange} onMouseLeave={real}>{name}</button>
      </div>

    </>
  );
};
export default App;