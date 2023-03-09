import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}



export const Button = (props:ButtonPropsType) => {
    const onclickButtonHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onclickButtonHandler}>{props.name}</button>
        </div>
    );
};

