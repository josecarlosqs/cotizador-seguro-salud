import {
  useSelector
} from 'react-redux'

import {Field, CheckboxField, SelectInput, TextInput, DateInput} from '../field'

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

        <Field
          input={ <DateInput placeholder="Fecha de nacimiento" name="birthday" /> } />

        
        <Field
          input={ <TextInput type="number" placeholder="Celular" name="cellphone" nativeInputProps={{min: 900000000, max: 999999999}}/> }
        />

        <CheckboxField name="tyc" className="text--grey">
          Acepto la <a className="text--grey" href="https://www.termsandcondiitionssample.com/" rel="noreferrer" target="_blank">Política de Protección de Datos Personales y los Términos y Condiciones.</a>
        </CheckboxField>

        <CheckboxField name="marketing" className="text--grey">
          Acepto la <a className="text--grey" href="https://www.termsandcondiitionssample.com/" rel="noreferrer" target="_blank">Política de Envío de Comunicaciones Comerciales.</a>
        </CheckboxField>

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default HomeScreen;