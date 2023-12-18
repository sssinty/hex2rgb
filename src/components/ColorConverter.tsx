import Input from "./Input";
import { useState } from "react";
const ColorConverter = () => {
  const [state, setState] = useState([]);

  function converter({target} : object) {
    if(target.value[0] === '#') {

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
      const color = result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] : [];

      setState(color);
    } 
  }

  return (
    <div className="container-hex" style={{background: `rgb(${state?.toString()})`}}>
        <form className="hex-form">
        <Input placeholder={"Введите HEX цвет"} onChange={converter} maxLength={7}/>
        </form>
        <div className="rgba-conclusion">
            <p>{state.length != [].length  ? `rgb(${state?.toString()})` : 'Ошибка'}</p>
        </div>
    </div>
  ) 
}

 export default ColorConverter;