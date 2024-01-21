import "../blocks/input/input__field.css";
import "../blocks/input/input-container.css";

export default function InputsComponent({ setFirstInput, setSecondInput }) {
  return (
    <div className="input-container">
      <input
        name="firstInput"
        className="input__field"
        onChange={(e) => setFirstInput(parseInt(e.target.value))}
        type="number"
      ></input>
      <input
        name="secondInput"
        className="input__field"
        onChange={(e) => setSecondInput(parseInt(e.target.value))}
        type="number"
      ></input>
    </div>
  );
}
