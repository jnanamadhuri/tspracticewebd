interface buttonShape{
    label: string;
    onclick:()=>void;
    disabled:boolean;
}
const Buttons = ({label,onclick,disabled}:buttonShape) => {
  return (
    <div>
        <button onClick={onclick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Buttons