import { useState, SyntheticEvent  } from 'react';
import PropTypes, { InferProps } from "prop-types";
import IListOption from '../interfaces/IListOption';

export function TextInput({placeholder, type, name, isPrepend}: InferProps<typeof TextInput.propTypes>){

  const [isFilled, setIsFilled] = useState(false);

  let fieldInputClassName = 'field__input';

  if(!placeholder){
    fieldInputClassName += ' field__input--no-placeholder';
  }

  if(isPrepend){
    fieldInputClassName += ' field__input--prepend';
  }

  let inputClassName;
  if(isFilled){
    inputClassName = 'filled';
  }

  const handleFocus = () => setIsFilled(true)
  const handleBlur = (e: SyntheticEvent ) => {
    const value = (e.target as HTMLInputElement).value;
    if(!value){
      setIsFilled(false)
    }
  }

  return <label className={fieldInputClassName}>
    <input type={type} name={name} className={inputClassName} onFocus={handleFocus} onBlur={handleBlur} />
    {placeholder && <div className="field__placeholder"><span>{ placeholder }</span></div>}
  </label> 
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired,
  isPrepend: PropTypes.bool.isRequired
};

TextInput.defaultProps = {
  type: 'text',
  isPrepend: false
};

interface ISelectInputProps{
  placeholder?: string,
  options: Array<IListOption>,
  name: string,
  isPrepend: boolean
}

export function SelectInput({placeholder, options, name, isPrepend}: ISelectInputProps){

  let fieldInputClassName = 'field__input';

  if(!placeholder){
    fieldInputClassName += ' field__input--no-placeholder';
  }

  if(isPrepend){
    fieldInputClassName += ' field__input--prepend';
  }

  return <label className={fieldInputClassName}>
    <select name={name}>
      { options.map(option => <option value={ option.value }>{ option.label }</option>) }
    </select>
    {placeholder && <div className="field__placeholder"><span>{ placeholder }</span></div>}
  </label>
}


SelectInput.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  isPrepend: PropTypes.bool.isRequired
};

SelectInput.defaultProps = {
  type: 'text',
  isPrepend: false
};


// function Field({input, prepend}: InferProps<typeof Field.propTypes>){
function Field({input, prepend}: any){
  return <div className="field">
    {prepend}
    {input}
  </div>
}

// Field.propTypes = {
//   input: PropTypes.oneOfType([
//     PropTypes.instanceOf(TextInput),
//     PropTypes.instanceOf(SelectInput)
//   ]).isRequired,
//   prepend: PropTypes.oneOfType([
//     PropTypes.instanceOf(TextInput),
//     PropTypes.instanceOf(SelectInput)
//   ])
// };

export default Field;