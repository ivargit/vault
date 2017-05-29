import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Fawesome_icon } from './common';

/*
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
*/
class ListItem extends Component {
  /*componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
*/
  showStars(count) {
    /*let items = [];
    for (let i = 0; i < count; i++) {
      items.push(<View><Image 
            source={{uri:'http://vissiontek.com/hotels/star.png'}}
            style= {styles.starImageStyle} 
          /></View>);
    }
    return <View style={{flexDirection: 'row'}}>{items}</View>;
*/

    
    
    return <View style={{flexDirection: 'row'}}>
            <Image 
              source={{uri:'http://vissiontek.com/hotels/star.png'}}
              style= {styles.starImageStyle} 
            />
            </View>;
            
  }
  onRowPress(){
    Actions.hoteldetail({hotel: this.props.hotel});
  }

  render() {
    const { imageStyle, titleStyle, starsStyle, priceStyle } = styles;
    const { id, image, title, price, feature, feature_icon, stars } = this.props.hotel;
    
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
        <View>
          <Card>
            <CardSection>
              <Image source={{uri:image}} style= {imageStyle} />
            </CardSection>

            <CardSection>
              <Text style={titleStyle}> {title} </Text>
            </CardSection>

            <CardSection>        
              <View style={starsStyle}>
                <View>{this.showStars(stars)}</View>
                <Text><Fawesome_icon iconName={feature_icon} /> {feature}</Text>
              </View>
              <View style={priceStyle}>
                <Text>precio por noche</Text>
                <Text>ARS <Text style={{fontWeight: '600', fontSize: 20 }}>{price}</Text></Text>
              </View>
            </CardSection>

          </Card>
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: '600'
  },
  starsStyle:{
    flex:2
  },
  starImageStyle:{
    height: 18,
    width: 18
  },
  priceStyle:{
    flex: 1,
    paddingLeft: 5,
    marginLeft: 15,
    borderColor: '#ededed',
    borderLeftWidth: 2,
    opacity:0.7
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
  
};

/*
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};
*/
//export default connect(mapStateToProps, actions)(ListItem);
export default ListItem;
