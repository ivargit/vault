// Import libraries for making a component
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Fawesome_icon = (props) => {
  switch(props.iconName){
      case 'bed':
        return (
          <Icon name="bed" size={30} color="#ddd" />
        );
      case 'coffee':
        return (
          <Icon name="coffee" size={30} color="#ddd" />
        );
      default:
        return (
          <Icon name="question-circle-o" size={30} color="#ddd" />
        );
    }
};

export { Fawesome_icon };
