import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import Axios from 'axios';
import IStateMeta from '../interfaces/IStateMeta'
import IPersonalInfo from '../interfaces/IPersonalInfo'

interface IPersonalInfoState extends IPersonalInfo {
  meta: IStateMeta,
}

const initialState: IPersonalInfoState = {
  meta: {
    loading: false,
    done: false,
    error: false
  },
  documentNumber: null,
  documentType: null,

  birthday: null,
  cellphone: null,
  firstName: null,
  lastNamePat: null,
  lastNameMat: null,
  gender: null,

  acceptedTyc: null,
  acceptedMkt: null
}

export const fetchPerson = createAsyncThunk('personalInfo/fetchPerson', async () => {
  let response = await Axios.get('https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone');
  return response.data.results[0];
});

export const updatePerson = createAsyncThunk('personalInfo/updatePerson', async () => {
  let response = await Axios.put('https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone');
  return response.data;
});

export const deletePerson = createAsyncThunk('personalInfo/deletePerson', async () => {
  let response = await Axios.delete('https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone');
  return response.data;
});

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPerson.pending, (state: IPersonalInfoState) => {
      state.meta.loading = true
      state.meta.done = false
      state.meta.error = false
    })
    .addCase(fetchPerson.fulfilled, (state: IPersonalInfoState, action: AnyAction) => {

      state.meta.loading = false
      state.meta.done = true
      state.meta.error = false

      state.documentNumber = action.payload.id.value;
      state.documentType = action.payload.id.name;
      state.birthday = action.payload.dob.date; // check
      state.cellphone = action.payload.phone.replace(/[^0-9]/g, '');
      state.firstName = action.payload.name.title;
      state.lastNamePat = action.payload.name.first;
      state.lastNameMat = action.payload.name.last;
      state.gender = action.payload.gender;

      state.acceptedTyc = true;
      state.acceptedMkt = true;
      
      // state.acceptedTyc = action.payload.acceptedTyc;
      // state.acceptedMkt = action.payload.acceptedMkt;
    })
    .addCase(fetchPerson.rejected, (state: IPersonalInfoState) => {
      state.meta.loading = false
      state.meta.done = false
      state.meta.error = true
    })
  },
})

export default personalInfoSlice.reducer
