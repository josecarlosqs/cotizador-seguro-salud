import { useState, SyntheticEvent, useRef, useEffect } from 'react';
import PropTypes, { InferProps } from "prop-types";
import IListOption from '../interfaces/IListOption';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js"

export function DateInput({placeholder, name, isPrepend, invalid}: InferProps<typeof DateInput.propTypes>){
  const input = useRef<HTMLInputElement>(null);

  let fieldInputClassName = 'field__input';

  if(!placeholder){
    fieldInputClassName += ' field__input--no-placeholder';
  }

  if(invalid){
    fieldInputClassName += ' field__input--invalid';
  }

  if(isPrepend){
    fieldInputClassName += ' field__input--prepend';
  }

  useEffect(() => {
    if( input.current !== null && !(input.current as any)._flatpickr ){
      let _input = input.current;
      flatpickr(_input, {
        "locale": Spanish,
        altFormat: 'd/m/Y',
        altInput: true,
        onChange: function(selectedDates, dateStr, instance) {
          (instance.altInput as HTMLInputElement).className += " filled";
        },
      });
    }
  }, [])

  return <label className={fieldInputClassName}>
    <input type="text" ref={input} name={name} />
    {placeholder && <div className="field__placeholder"><span>{ placeholder }</span></div>}
  </label> 
}

DateInput.propTypes = {
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  isPrepend: PropTypes.bool.isRequired
};

DateInput.defaultProps = {
  isPrepend: false
};

export function TextInput({placeholder, type, name, isPrepend, invalid, nativeInputProps}: InferProps<typeof TextInput.propTypes>){

  const [isFilled, setIsFilled] = useState(false);

  let fieldInputClassName = 'field__input';

  if(!placeholder){
    fieldInputClassName += ' field__input--no-placeholder';
  }

  if(invalid){
    fieldInputClassName += ' field__input--invalid';
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
    <input type={type} {...nativeInputProps} name={name} className={inputClassName} onFocus={handleFocus} onBlur={handleBlur} />
    {placeholder && <div className="field__placeholder"><span>{ placeholder }</span></div>}
  </label> 
}

TextInput.propTypes = {
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired,
  isPrepend: PropTypes.bool.isRequired,
  nativeInputProps: PropTypes.object
};

TextInput.defaultProps = {
  type: 'text',
  isPrepend: false,
  nativeInputProps: {}
};

interface ISelectInputProps{
  placeholder?: string,
  options: Array<IListOption>,
  name: string,
  isPrepend: boolean,
  invalid?: boolean
}

export function SelectInput({placeholder, options, name, invalid, isPrepend}: ISelectInputProps){

  let fieldInputClassName = 'field__input';

  if(!placeholder){
    fieldInputClassName += ' field__input--no-placeholder';
  }

  if(isPrepend){
    fieldInputClassName += ' field__input--prepend';
  }

  if(invalid){
    fieldInputClassName += ' field__input--invalid';
  }

  return <label className={fieldInputClassName}>
    <select name={name}>
      { options.map(option => <option value={ option.value } key={ option.value }>{ option.label }</option>) }
    </select>
    {placeholder && <div className="field__placeholder"><span>{ placeholder }</span></div>}
  </label>
}


SelectInput.propTypes = {
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  isPrepend: PropTypes.bool.isRequired
};

SelectInput.defaultProps = {
  type: 'text',
  isPrepend: false
};

export function Field({input, prepend}: any){
  let fieldClassName = 'field';
  
  if(input.props.invalid || prepend?.props?.invalid){
    fieldClassName += ' field--invalid';
  }

  return <div className={fieldClassName}>
    {prepend}
    {input}
  </div>
}

export function CheckboxField({children, name, className}: InferProps<typeof CheckboxField.propTypes>){
  const [value, setValue] = useState('off');
  return <label className={`checkbox-field ${className}`}>
    <input type="checkbox" name={name} onChange={evt => setValue(evt.target.checked ? 'on' : 'off')}/>
    <input type="hidden" name={name} value={value}/>
    <div className="checkbox-field__box"></div>
    <div className="gap"></div>
    <div className="checkbox-field__legend">
      {children}
    </div>
  </label>
}

CheckboxField.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export function RadioListField({options, name, label}: InferProps<typeof RadioListField.propTypes>){
  return <div className="radiolist-field">
    <p>{label}</p>

    
    
  </div>
}
RadioListField.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}