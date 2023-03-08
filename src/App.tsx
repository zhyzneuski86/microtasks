import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent"


function App() {

    let [students, setStudents] = useState([
        {id:1, name: "Vasia", age: 12},
        {id:1, name: "Misha", age: 22},
        {id:1, name: "Nastya", age: 32},
        {id:1, name: "Petia", age: 52},
        {id:1, name: "Sasha", age: 34},
        {id:1, name: "Gosha", age: 9},
    ])

    // let topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]

  return (
    <div className="App">
        {/*<Header title={"New Body"}/>*/}
        {/*<Body title={"New body"}/>*/}
        {/*<Footer/>*/}
        <NewComponent students={students}/>

    </div>
  );
}

export default App;



