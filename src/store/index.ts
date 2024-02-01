import { configureStore } from '@reduxjs/toolkit';
import stateData from '../redux/stateData';


const store = configureStore({
	reducer: {data : stateData}
});

export default store;