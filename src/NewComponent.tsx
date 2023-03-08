import React from "react";

type NewComponent = {
    // students: Array<StudentType>
    students: StudentType[]

}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponent) => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
 const map1 = topCars.map((objectFromTopCars, index)=> {
     return (
         <table key={index}>
             <tr>
                 <th>{objectFromTopCars.manufacturer}</th>
                 <th>{objectFromTopCars.model}</th>
             </tr>

         </table>
     )
 })




    return (
        <ul>
            {props.students.map((objectFromStudentArray, index)=>{
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                 )
            })}
            {map1}


        </ul>
    )
}