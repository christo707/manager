import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LogoutButton = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
      <Text style={styles.textStyle}> {children} </Text>
    </TouchableOpacity>
  );

const styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F00',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F00',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10
  }
};


export { LogoutButton };
