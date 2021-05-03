import IStateMeta from '../../interfaces/IStateMeta'
import IListOption from '../../interfaces/IListOption'
import IPersonalInfo from '../../interfaces/IPersonalInfo'
import { AnyAction } from 'redux'

interface IPersonalInfoState extends IPersonalInfo {
  meta: IStateMeta,
  extra: {
    documentTypeList: Array<IListOption>,
    genderList: Array<IListOption>
  }
}

const initialState: IPersonalInfoState = {
  meta: {
    loading: false,
    done: false,
    error: false
  },
  extra: {
    documentTypeList: [
      {label: 'DNI', value: 'DNI'},
      {label: 'RUC', value: 'RUC'},
    ],
    genderList: [
      {label: 'Masculino', value: 'male'},
      {label: 'Femenino', value: 'female'},
    ]
  },
  documentNumber: null,
  documentType: null,

  birthday: null,
  cellphone: null,
  firstName: null,
  lastNamePat: null,
  lastNameMat: null,

  acceptedTyc: null,
  acceptedMkt: null
}

export default function personalInfoReducer(state: IPersonalInfoState = initialState, action: AnyAction) {
  switch (action.type) {
    case 'personalInfo/startLoadingInfo':
      return {
        ...initialState,
        meta: {
          loading: true,
          done: false,
          error: false
        }
      }

    case 'personalInfo/doneLoadingInfo':
      const personalData: IPersonalInfo = action.payload;

      return {
        ...state,
        meta: {
          loading: false,
          done: true,
          error: false
        },
        documentNumber: personalData.documentNumber,
        documentType: personalData.documentType,
        birthday: personalData.birthday,
        cellphone: personalData.cellphone,
        firstName: personalData.firstName,
        lastNamePat: personalData.lastNamePat,
        lastNameMat: personalData.lastNameMat,
        acceptedTyc: personalData.acceptedTyc,
        acceptedMkt: personalData.acceptedMkt
      }

    case 'personalInfo/errorLoadingInfo':
      return {
        ...initialState,
        meta: {
          loading: false,
          done: false,
          error: true
        }
      }

    default:
      return state
  }
}