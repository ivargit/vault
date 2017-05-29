import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, CardSection, Fawesome_icon } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

class HotelsDetail extends Component {

	render() {
		const { id, image, title, stars, feature, feature_icon, price, address, checkin, checkout, location } = this.props.hotel;		
		const { imageStyle,
			titleStyle, 
			cardSectionTitleStyle, 
			cardSectionTitleTextStyle, 
			checkContainer,
			starsStyle, 
			priceStyle,
			cardTitleStyle,
			mapContainerStyle 
		} = styles;
		const map_lati_long = location.split(',');
		const myinitialRegion = {
		            latitude: Number(map_lati_long[0]),
		            longitude: Number(map_lati_long[1]),
		            latitudeDelta: 0.00922,
		            longitudeDelta: 0.00421
		            
          		};
		

		
		const mycoordinate = {latitude: Number(map_lati_long[0]), longitude: Number(map_lati_long[1])};


    return (
      <ScrollView>
      	<View>
      		<Image source={{uri:image}} style= {imageStyle} />
      		<Card>
      			<CardSection>
      				<View style={{flexDirection: 'column'}}>
      					<Text style={titleStyle}>{title}</Text>
      					<View style={{ alignItems: 'flex-start', flexDirection: 'row'}}>
      						<Icon name="map-marker" size={30} color="#ddd" style={{ marginRight:15 }} /><Text >{address}</Text>
      					</View>
      				</View>
      			</CardSection>
     			</Card>
     			

     			<View style={{ height: 150 }}>
	      		<MapView 
        			style={mapContainerStyle}
        			initialRegion={myinitialRegion} 
      			>

      				<MapView.Marker
            		coordinate={mycoordinate}
            		//title={"title"}
            		//description={"description"}
         			/>
         		</MapView>
      		</View>

     			<Card>
      			<CardSection>
      				<View style={{flexDirection: 'column', flex: 1}}>
	      				<View style={cardSectionTitleStyle}>
	      					<Text style={cardSectionTitleTextStyle}>Descripción</Text>
	      				</View>

	      				<View style={checkContainer}>
	      					
		      					<View>
		      						<Text><Icon name="clock-o" size={30} color="#ddd" /></Text>
		      					</View>
		      					<View style={{flexDirection: 'column', paddingLeft: 10}}>
		      						<Text>Entrada: {checkin}</Text>
		      						<Text>Salida: {checkout}</Text>
		      					</View>
		      				
	      				</View>

	      				<View>
	      					<Text style={{color: '#3B5998'}}>Ubicación del Establecimiento</Text>
	      					<Text>En Miami ... </Text>
	      				</View>
      				</View>
      			</CardSection>
     			</Card>

     			<Card>
      			<CardSection>
      				<View style={{flexDirection: 'column', flex: 1}}>
	      				<View style={cardSectionTitleStyle}>
	      					<Text style={cardSectionTitleTextStyle}>Habitaciones <Icon name="users" size={30} color="#ddd" style={{marginLeft: 15}} /></Text>

	      				</View>


	      				<View style={checkContainer}>
		      					<View>
		      						<Fawesome_icon iconName={feature_icon} />
		      					</View>
		      					<View>
		      						<Text style={{ paddingLeft: 5 }}>{feature}</Text>
		      					</View>
	      				</View>

	      				<View style={checkContainer}>
	      					<View style={{marginRight:10}}>
	      						<Text>precio por noche por habitacion</Text>
	      					</View>
	      					<View style={priceStyle}>
                		<Text>ARS <Text style={{fontWeight: '600', fontSize: 20 }}>{price}</Text></Text>
              		</View>
	      				</View>

	      			</View>
	      		</CardSection>
					</Card>

					<Card>
						<CardSection>
							<View style={{flexDirection: 'column' }}>
								<Text>
				      		Detalle 
				      	</Text>
				      	<Text>
				      		Detalle 
				      	</Text>
				      	<Text>
				      		Detalle 
				      	</Text>
				      	<Text>
				      		Detalle 
				      	</Text>
				      	<Text>
				      		Detalle 
				      	</Text>
				      	
			        	
			          <Text>
				      		Detalle Fin
				      	</Text>
			      	</View>
						</CardSection>
					</Card>









					
					


	      	
				</View>
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  titleStyle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    paddingLeft: 15,
    fontWeight: '600'
  },
  cardSectionTitleStyle: {
    borderBottomWidth: 2,
		borderColor: '#ddd',		
		paddingBottom: 10,
		marginBottom: 10
  },
  cardSectionTitleTextStyle: {
		fontSize:18
  },
  checkContainer: {
  	flexDirection: 'row',
  	alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#eaeaea',		
		paddingBottom: 10,
		marginBottom: 10
	},
	mapContainerStyle: {
    flex: 1,
    height: 300
  }
	
  
};
export default HotelsDetail;
