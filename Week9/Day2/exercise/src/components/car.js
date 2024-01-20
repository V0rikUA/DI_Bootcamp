import {useState} from "react"
import Garage from './garage';


const CarInfo =(props) =>{
  const {model} = props.info;
  const [color, setColor] = useState("red")
  return (
    <div>
      <p>This car is {color} {model}</p>
      <Garage size="small"/>
    </div>
  )
}

export default CarInfo;