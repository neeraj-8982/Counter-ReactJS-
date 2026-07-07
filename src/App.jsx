import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [counter, setCounter] = useState(1) /* const is using only where to data not change or remove */

  // // let counter = 0

  // const addValue = () => {

  //   console.log("value added", counter);
  //   // counter = counter + 1;
  //   setCounter(counter + 1);

  // }

  // const removeValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }

  //   const removeValue = () => {
  //     if (counter > 0) {
  //       setCounter(counter - 1);
  //     }
  //   };

  //   const reset = () => {
  //     setCounter(1);
  //   };


  // }

  // return (
  //   <>
  //     <div id="body">
  //       <h1>Hero Aur Code</h1>
  //       <h2>Counter value : {counter}</h2>
  //       <div className="reset">
  //         <button>
  //           <h2>restar{reset}</h2>
  //         </button>
  //       </div>
  //       <button onClick={addValue}>Add Value</button>
  //       <br />
  //       <button onClick={removeValue}>Remove Value</button>
  //     </div>


  //   </>


  const [counter, setCounter] = useState(1);

  const addValue = () => {
    console.log("value added", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div id="body">
        <h1 className='hero'>Hero Aur Code</h1>
        <h2 className='counter'>Counter value: {counter}</h2>



        <button onClick={addValue}>Add Value</button>
        <span className="reset" style={{
          display: 'flex',
          marginRight: '240px',
          color: 'blue'
        }}>
          <button onClick={reset} className='restart'>↻</button>
        </span>
        <br />

        <button className=' remove' onClick={removeValue}>Remove Value</button>


      </div >




    </>
  );





}

export default App
