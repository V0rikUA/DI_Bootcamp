import './App.css';
import hongKong from "./assets/HongKong.jpg"
import japan from "./assets/japan.webp"
import lasVegas from "./assets/las-vegas.webp"
import macao from "./assets/Macao.webp"

import ImageCarousel from './components/ImageCarousel';

function App() {
  const images = [
    {image:hongKong, alt:"some text",legend: "Hong Kong"},
    {image: japan, alt:"some text", legend: "Japan"},
    {image:lasVegas, alt:"some text", legend: "Las Vegas"},
    {image:macao, alt:"some text", legend: "Macao"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ImageCarousel images={images}></ImageCarousel>
      </header>
    </div>
  );
}

export default App;
