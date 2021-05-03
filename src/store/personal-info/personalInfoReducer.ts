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
      state.meta.loading = true;
      return state;

    case 'personalInfo/doneLoadingInfo':
      state.meta.loading = false;
      state.meta.error = false;
      state.meta.done = true;

      const personalData: IPersonalInfo = action.payload;

      state.documentNumber = personalData.documentNumber;
      state.documentType = personalData.documentType;
      state.birthday = personalData.birthday;
      state.cellphone = personalData.cellphone;
      state.firstName = personalData.firstName;
      state.lastNamePat = personalData.lastNamePat;
      state.lastNameMat = personalData.lastNameMat;
      state.acceptedTyc = personalData.acceptedTyc;
      state.acceptedMkt = personalData.acceptedMkt;
      return state;

    case 'personalInfo/errorLoadingInfo':
      state.meta.error = true;
      state.meta.done = false;
      state.meta.loading = false;
      return state;

    default:
      return state
  }
}