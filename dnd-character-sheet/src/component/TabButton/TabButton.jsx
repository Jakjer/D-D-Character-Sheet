import Button from '../Button/Button.js';

export function TabButton(props) {
  console.log("Prop Character List", props);

  return (
    <Button text={props.children} onClick={() => props.onClick()}>{props.children}</Button>
  );
}