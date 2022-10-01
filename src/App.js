import React, { useState } from 'react';
import './App.css';
import { Buttons, Display } from './components'

function App() {
 const [displayData, setDisplayData] = useState(0);

  return (<React.Fragment>

    <div className='row p-5'>
      <div className='col-3'></div>
      <div id='calc_container' className='col text-center p-4 border bg-primary rounded position-absolute top-50 start-50 translate-middle'>
        <Display getDisplayData={displayData}></Display>
        <Buttons setDisplayData={setDisplayData} getDisplayData={displayData}></Buttons>
      </div>
      <div className='col-3'></div>
    </div>

  </React.Fragment>
  );
}  

export default App;

