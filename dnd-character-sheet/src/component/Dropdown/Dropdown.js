import { Button } from "../Button/Button";

export function Dropdown(props) {
  let { options } = props;
  console.log("Options", options);
  function sayHi() {
    console.log("Hi");
  }
  return (
    <div>
    <select>
      {options.map((options, optionIndex) => {
        return (
          <option key={optionIndex} value={options.attributeModifier}>
            {options.name}
          </option> 
          )}
        )
      }
    </select>
    <Button text="Roll" onClick={() => sayHi()}> Roll </Button>
    </div>
  )
}