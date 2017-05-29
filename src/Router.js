import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HotelsList from './components/HotelsList';
import HotelDetail from './components/HotelDetail';

const RouterComponent = () => {
  return (
  	<Router sceneStyle={{ paddingTop: 65 }}>
  		<Scene 
        //onRight={() => Actions.hoteldetail()}
        //rightTitle="Show Hotel"
        key="hotelslist" 
        component={HotelsList} 
        title="Hotels List" 
        initial
        />
      <Scene key="hoteldetail" component={HotelDetail} title="Hotel Detail" />
  	</Router>  	
  );
};

export default RouterComponent;
