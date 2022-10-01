import React, { useState } from "react";

const Buttons = (props) => {

    const [isActive, setActive] = useState(true);

    const buttonsHandler = props.getDisplayData === 0 ?

        (event) => { props.setDisplayData(event.target.value); setActive(true) } :
        function (event) { props.setDisplayData(props.getDisplayData + event.target.value); setActive(true) };

    const operatorHandler = function (event) { props.setDisplayData(props.getDisplayData + event.target.value); setActive(false) };


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

    const EqualButton = () => {
        return (
            /* eslint-disable-next-line */
            <button value="=" className='col-10 bg-success calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(eval(props.getDisplayData)) }}>=</button>
        )
    }

    const ResetButton = () => {
        return (
            <button className='col bg-danger calcbutton m-2 py-4 rounded' onClick={() => { props.setDisplayData(0); setActive(true) }}>C</button>
        )
    }

    const buttonsArray = [
        <NumberButton value="7" />,
        <NumberButton value="8" />,
        <NumberButton value="9" />,
        <OperationButton value={isActive ? "+" : ""} />,
        <NumberButton value="4" />,
        <NumberButton value="5" />,
        <NumberButton value="6" />,
        <OperationButton value={isActive ? "-" : ""} />,
        <NumberButton value="1" />,
        <NumberButton value="2" />,
        <NumberButton value="3" />,
        <OperationButton value={isActive ? "*" : ""} />,
        <ResetButton />,
        <NumberButton value="0" />,
        <OperationButton value={isActive ? "." : ""} />,
        <OperationButton value={isActive ? "/" : ""} />,
        <EqualButton />
    ];

    return (
        <div className='p-3' >

            <div className='row row-cols-5 justify-content-center'>

                {buttonsArray.map((buttonElement, id) => {
                    return (
                        <React.Fragment key={id}>
                            {buttonElement}
                        </React.Fragment>
                    )
                })}

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