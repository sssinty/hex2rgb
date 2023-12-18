import { ChangeEventHandler} from "react"

interface IPropsInput {
  value?: string,
  type?: 'text',
  placeholder?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  maxLength: number
}
const Input = ({type = 'text', placeholder, value, onChange, maxLength} : IPropsInput) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength}/>
}

export default Input;