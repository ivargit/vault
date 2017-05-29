import { combineReducers } from 'redux';
import HotelsReducer from './HotelsReducer';
//import AuthReducer from './AuthReducer';

//
//import SelectionReducer from './SelectionReducer';

export default combineReducers({
	hotels: HotelsReducer
	//auth: AuthReducer

});
/*
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId : SelectionReducer
});
*/
