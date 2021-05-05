import { useLayoutEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import StepIndicator from '../step-indicator'

import {Field, SelectInput, TextInput, DateInput} from '../field'

import documentTypeList from '../../json/documentTypeList.json';

function PersonalInfoScreen (){

  const person = useSelector(store => (store as any).personalInfo.meta);
  const history = useHistory();

  const goto = useCallback((path: string) => {
    history.push(`${process.env.PUBLIC_URL}${path}`)
  }, [history]);

  useLayoutEffect(() => {
    if(!person.done){
      goto('/');
    }
  }, [ person.done, goto ])

  return (
    <div>
      <StepIndicator currentStep={1} />
      
      
      <form action="#" className="form">

        <Field
          input={<TextInput placeholder="Nro. de Documento" name="documentNumber"/>}
          prepend={ <SelectInput isPrepend options={documentTypeList} name="documentType"/> }
        />

        <Field
          input={<TextInput placeholder="Nombres" name="firstName"/>}
        />

        <Field
          input={<TextInput placeholder="Apellido Paterno" name="lastNamePat"/>}
        />

        <Field
          input={<TextInput placeholder="Apellido Materno" name="lastNameMat"/>}
        />

        <Field
          input={<DateInput placeholder="Fecha de Nacimiento" name="lastNameMat"/>}
        />

        {/* <Field
          input={ <TextInput invalid={(invalidFields as any).documentNumber} placeholder="Nro. de Documento" name="documentNumber"/> }
          prepend={ <SelectInput invalid={(invalidFields as any).documentType} isPrepend options={documentTypeList} name="documentType"/> }
        />

        <Field
          input={ <DateInput invalid={(invalidFields as any).birthday} placeholder="Fecha de nacimiento" name="birthday" /> } />

        
        <Field
          input={ <TextInput invalid={(invalidFields as any).cellphone} type="number" placeholder="Celular" name="cellphone" nativeInputProps={{min: 900000000, max: 999999999}}/> }
        />

        <CheckboxField name="tyc" className={(invalidFields as any).tyc ? "text--red" : "text--grey"}>
          Acepto la <a className={(invalidFields as any).tyc ? "text--red" : "text--grey"} href="https://www.termsandcondiitionssample.com/" rel="noreferrer" target="_blank">Política de Protección de Datos Personales y los Términos y Condiciones.</a>
        </CheckboxField>

        <CheckboxField name="marketing" className="text--grey">
          Acepto la <a className="text--grey" href="https://www.termsandcondiitionssample.com/" rel="noreferrer" target="_blank">Política de Envío de Comunicaciones Comerciales.</a>
        </CheckboxField> */}

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default PersonalInfoScreen;