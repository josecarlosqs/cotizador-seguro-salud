import {
  useSelector
} from 'react-redux'

import Field, {SelectInput, TextInput} from '../field'

function HomeScreen (){
  const optionLists = useSelector(store => (store as any).personalInfo.extra);

  
  return (
    <div>
      <h2 className="text--h2 text--light text--h2">Obtén tu <span className="text--regular text--blue">seguro ahora</span></h2>
      <p className="page__description text--light">Ingresa los datos para comenzar.</p>

      <form action="#" className="form">

        <Field
          input={ <TextInput placeholder="Nro. de Documento" name="documentNumber"/> }
          prepend={ <SelectInput isPrepend options={optionLists.documentTypeList} name="documentType"/> }
        />

        {/* <div className="field">
          <label className="field__input">
            <div className="field__placeholder"></div>
            <input type="text"/>
          </label>
        </div>

        <div className="field">
          <label className="field__input">
            <div className="field__placeholder"></div>
            <select>
              <option></option>
              <option value="1">1111111</option>
              <option value="2">2222222</option>
              <option value="3">3333333</option>
              <option value="4">4444444</option>
            </select>
          </label>
        </div>

        <div className="field">
          <label className="field__input field__input--prepend">
            <div className="field__placeholder"></div>
            <select>
              <option></option>
              <option value="1">111</option>
              <option value="2">222</option>
              <option value="3">333</option>
              <option value="4">444</option>
            </select>
          </label>
          <label className="field__input">
            <div className="field__placeholder"></div>
            <input type="text"/>
          </label>
        </div> */}
      </form>
    </div>
  );
}

export default HomeScreen;