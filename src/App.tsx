// import React, {useState} from 'react';
import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponent} from "./NewComponent"
import React, {MouseEvent, useState} from 'react';
import {Button} from "./components button/button";

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
    let[a, setA]=useState(1)
        const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler0 = () => {
        setA(0)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>

        </div>
    );


}

export default App;



