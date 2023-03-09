// import React, {useState} from 'react';
import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponent} from "./NewComponent"
import React, {MouseEvent, useState} from 'react';
import {FullInput} from "./components input/fullInput";
import {Button} from "./components input/button";
import {Input} from "./components input/input";

// import {Button} from "./components button/button";

function App() {

    // let [students, setStudents] = useState([
    //     {id: 1, name: "Vasia", age: 12},
    //     {id: 1, name: "Misha", age: 22},
    //     {id: 1, name: "Nastya", age: 32},
    //     {id: 1, name: "Petia", age: 52},
    //     {id: 1, name: "Sasha", age: 34},
    //     {id: 1, name: "Gosha", age: 9},
    // ])


    // const Button1Foo = (subscribler: string, age: number) => {
    //     console.log(subscribler, age)
    // }
    // const Button2Foo = (subscribler: string) => {
    //     console.log(subscribler)
    // }
    // const Button3Foo = () => {
    //     console.log("I'm stupid button")
    // }
    // return (
    //     <div className="App">
    //         {/*<Header title={"New Body"}/>*/}
    //         {/*<Body title={"New body"}/>*/}
    //         {/*<Footer/>*/}
    //         {/*<NewComponent students={students}/>*/}
    //         <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo("I'm Sasha", 21)}/>
    //         <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo("I'm Misha")}/>
    //         <Button name={'StupidButton'} callBack={Button3Foo}/>
    //     </div>
    // );
    // let a = 1
    // let[a, setA]=useState(1)
    //     const onClickHandler = () => {
    //     setA(++a)
    //     console.log(a)
    // }
    // const onClickHandler0 = () => {
    //     setA(0)
    //     console.log(a)
    // }
    //
    // return (
    //     <div className="App">
    //         <h1>{a}</h1>
    //         <button onClick={onClickHandler}>number</button>
    //         <button onClick={onClickHandler0}>0</button>
    //
    //     </div>
    // );
// type FilterType = 'all'|'RUBLS'|'Dollars'
//     const [money, setMoney] = useState([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//
// const [filter,setFilter]=useState<FilterType>('all')
//
//     let currentMoney = money;
//     if (filter === 'RUBLS') {
//         currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'RUBLS')
//     }
//     if (filter === 'Dollars')
//         currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'Dollars')
//
//
//     const onClickFilterHandler = (nameButton: FilterType) => {
//         setFilter(nameButton)
//
//     }
//     return (
//         <>
//             <ul>
//                 {currentMoney.map((objectFromMoneyArray, index) => {
//                     return (
//                         <li key={index}>
//                             <span>{objectFromMoneyArray.banknots}</span>
//                             <span>{objectFromMoneyArray.value}</span>
//                             <span>{objectFromMoneyArray.number}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <div style={{marginLeft: '35px'}}>
//                 <button onClick={() => onClickFilterHandler("all")}>all</button>
//                 <button onClick={() => onClickFilterHandler("RUBLS")}>Rubl</button>
//                 <button onClick={() => onClickFilterHandler("Dollars")}>Dollar</button>
//             </div>
//         </>
//
//
//     );

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')

    }

    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );


}


export default App;



