import {Component} from "react"
import '../blocks/exercise.css'


export default class Exercise extends Component{
  render(){
    const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

    return(
      <div>
        <h1 style={style_header}>H1 tag</h1>
        <p className='para'>paragraph</p>
        <a href='https://octopus.developers.institute/courses/collection/77/course/344/section/856/chapter/1325#' >some link</a>
        <form>
          <input></input>
        </form>
        <img src='https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain'></img>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    )
  }
}