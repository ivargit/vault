import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import HotelsList from './components/HotelsList';

//import { createStore, applyMiddleware } from 'redux';

import Router from './Router';



class App extends Component {
	render() {
		//const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
	  return (
	      <Provider store={createStore(reducers)} style={{ flex:1}}>
	        <Router />
	      </Provider>
	      
	      /*
	      <Provider store={createStore(reducers)}>
	      	<View style={{ flex: 1}}>
	      		<Header headerText="Hotels" />
	      		<HotelsList />
	      	</View>
	      </Provider>
	      */
	  );
	}
}

export default App;
