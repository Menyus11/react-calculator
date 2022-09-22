import { operationDisabled, operationEnabled } from './App';

const Buttons = (props) => {

    const buttonsHandler = props.getDisplayData === 0 ?
        (event) => { props.setDisplayData(event.target.value); operationEnabled() } :
        function (event) { props.setDisplayData(props.getDisplayData + event.target.value); operationEnabled() };

    const operatorHandler = function (event) { props.setDisplayData(props.getDisplayData + event.target.value); operationDisabled() };

    return (
        <div className='p-3' >

            <div className='row'>
                <button value="7" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>7</button>
                <button value="8" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>8</button>
                <button value="9" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>9</button>
                <button value="+" className='col bg-info calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>+</button>
            </div>

            <div className='row'>
                <button value="4" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>4</button>
                <button value="5" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>5</button>
                <button value="6" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>6</button>
                <button value="-" className='col bg-info calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>-</button>
            </div>

            <div className='row'>
                <button value="1" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>1</button>
                <button value="2" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>2</button>
                <button value="3" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>3</button>
                <button value="*" className='col bg-info calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>x</button>
            </div>

            <div className='row'>
                <button value="." className='col bg-info calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>,</button>
                <button value="0" className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>0</button>
                <button value="c" className='col bg-info calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(0); operationEnabled() }}>C</button>
                <button value="/" className='col bg-info calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>/</button>
            </div>

            <div className='row'>
                {/* eslint-disable-next-line */}
                <button className='col bg-info calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(eval(props.getDisplayData)) }}>=</button>
            </div>

        </div>
    )
}

const Display = (props) => {
    return (
        <textarea className='bg-warning border rounded display form-control text-wrap' defaultValue={props.getDisplayData}></textarea>
    )
}

export { Buttons, Display };