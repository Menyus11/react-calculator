import React from "react";

const Buttons = (props) => {

    const operationDisabled = () => {
        document.querySelectorAll('.operation').forEach(e => {
            e.setAttribute('disabled', "")
        });
    }

    const operationEnabled = () => {
        document.querySelectorAll('.operation').forEach(e => {
            e.removeAttribute('disabled')
        });
    }

    const buttonsHandler = props.getDisplayData === 0 ?
        (event) => { props.setDisplayData(event.target.value); operationEnabled() } :
        function (event) { props.setDisplayData(props.getDisplayData + event.target.value); operationEnabled() };

    const operatorHandler = function (event) { props.setDisplayData(props.getDisplayData + event.target.value); operationDisabled() };


    const NumberButton = (props) => {
        return (
            <button value={props.value} className='col bg-info calcbutton m-2 py-4 rounded' onClick={buttonsHandler}>{props.value}</button>
        )
    }

    const OperationButton = (props) => {
        return (
            <button value={props.value} className='col bg-warning calcbutton m-2 py-4 rounded operation' onClick={operatorHandler}>{props.value}</button>
        )
    }

/*     const EqualButton = (props) => {
        return (
            
            <button value={props.value} className='col bg-success calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(eval(props.getDisplayData)) }}>{props.value}</button>
        )
    } */

    return (
        <div className='p-3' >

            <div className='row'>
                <NumberButton value="7" />
                <NumberButton value="8" />
                <NumberButton value="9" />
                <OperationButton value="+" />
            </div>

            <div className='row'>
                <NumberButton value="4" />
                <NumberButton value="5" />
                <NumberButton value="6" />
                <OperationButton value="-" />
            </div>

            <div className='row'>
                <NumberButton value="1" />
                <NumberButton value="2" />
                <NumberButton value="3" />
                <OperationButton value="*" />
            </div>

            <div className='row'>
                <button className='col bg-danger calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(0); operationEnabled() }}>C</button>
               
                <NumberButton value="0" />
                <OperationButton value="." />
                <OperationButton value="/" />
            </div>

            <div className='row'>
                {/* eslint-disable-next-line */}
                <button className='col bg-success calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(eval(props.getDisplayData)) }}>=</button>
                {/* <EqualButton value="="/> */}
            </div>

        </div>
    )
}

const Display = (props) => {
    return (
        <textarea className='bg-dark border rounded display form-control text-light text-wrap' defaultValue={props.getDisplayData}></textarea>
    )
}

export { Buttons, Display };