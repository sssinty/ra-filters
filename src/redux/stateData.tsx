import { nanoid } from 'nanoid';
import { IData, IEdit, IFilterData } from '../interface/Interface';
import { createSlice } from '@reduxjs/toolkit';

interface IDataState {
	data: IData[],
	isEdite: IEdit,
	filterData: IFilterData
}

const data : IDataState = {
	data : [
		{id: nanoid(), name: "Кулер", price: 3000},
		{id: nanoid(), name: "Плата", price: 10000},
		{id: nanoid(), name: "GPU", price: 30000},
		{id: nanoid(), name: "SSD", price: 8000},
		{id: nanoid(), name: "RAM", price: 9000},
	],
	isEdite: {id: "", edite: false},
	filterData: { newData: [] , isFilter: false}
}

const serviceReducer = createSlice({
	name: 'data',
	initialState: data,
	reducers : {
		addDataState(state, action) {
			state.data.push({
				id: nanoid(),
				name: action.payload.name,
				price: action.payload.price
			})
		},

		editData(state, action) {
			const currentData = state.data.find((elem) => elem.id === action.payload.id);
			if(currentData) {
				currentData.name = action.payload.text,
				currentData.price = action.payload.price
			}
		},

		removeService(state, action) {
			state.data = state.data.filter((elem) => elem.id != action.payload.id) 
		}, 

		setEdite(state, action) {
			state.isEdite.id = action.payload.id
			state.isEdite.edite = true
		},

		stopEdite(state) {
			state.isEdite.edite = false
		},

		serchData(state, action) {
			state.filterData.isFilter = true
			state.filterData.newData = [state.data.find((elem) => elem.text === action.payload.text)]
		},

		serchStop(state) {
			state.filterData.isFilter = false
		}
	}

});

export const {addDataState, removeService, setEdite, stopEdite, editData, serchData, serchStop} = serviceReducer.actions
export default serviceReducer.reducer