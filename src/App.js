import React from 'react';
import './App.css';

const Display = (props) => {
  return (
    <div className='bg-warning border m-2 rounded display'>
      <h1>

      </h1>
    </div>
  )
}

const Buttons = () => {
  return (
    <div className='p-3' >

      <div className='row'>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>7</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>8</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>9</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>+</h2></button>
      </div>

      <div className='row'>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>4</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>5</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>6</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>-</h2></button>
      </div>

      <div className='row'>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>1</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>2</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>3</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>x</h2></button>
      </div>

      <div className='row'>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>,</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>0</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>C</h2></button>
        <button className='col bg-info calcButton m-2 py-4 rounded'><h2>=</h2></button>
      </div>

    </div>
  )

}


function App() {
  return (<React.Fragment>

    <div className='row p-5'>
      <div className='col-3'></div>
      <div id='calc_container' className='col text-center p-4 border bg-primary rounded position-absolute top-50 start-50 translate-middle'>
        <Display></Display>
        <Buttons></Buttons>
      </div>
      <div className='col-3'></div>

    </div>

  </React.Fragment>
  );
}

export default App;
