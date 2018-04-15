import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
      <Text style={styles.textStyle}> {children} </Text>
    </TouchableOpacity>
  );

const styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
};


export { Button };
